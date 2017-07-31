<style lang="scss" rel="stylesheet/scss">
    @import '~alloy-normalize.css';
    html,
    body {
        height: 100%;
        user-select: none;
    }
    .qun_robot {
        height: 100%;
        display: flex;
    }
</style>

<template>
    <div class="group_setting">
        <div v-for="item in items" v-if="item.shown" :key="item.id">
            
        </div>
        <template v-if="isBelow700">
            <div class="fake-topbar" v-if="isAndroid"><!--android用这个模拟topbar--></div>
            <div v-else style="margin-top: 84px;"><!-- ios topbar 需要和android不一样的高度 --></div>
        </template>
        <div class="server_upgrade">群机器人服务调整中，我们将尽快恢复</div>
        <QList v-show="robotsList.length > 1">
            <QListItem
                title="当前机器人"
                :access="true"
                @on-tap="toSelectRobot"
            >
                <img :src="enabledRobot.avatar" alt="" slot="foot" class="robot_avatar--small">
            </QListItem>
        </QList>

        <QList>
            <QListItem
                title="新成员进群欢迎"
                :extra="welcomeText"
                :access="true"
                @on-tap="toSelectWelcome"
            ></QListItem>
            <QListItem
                title="加群自动审批"
                :extra="getAutoText"
                :access="true"
                @on-tap="toAutoApproval"
            >
            </QListItem>
            <!--<QListItem
                title="关键词禁言"
                :extra="isKeywordsBannedOn ? '已开启' : '未开启'"
                :access="true"
                @on-tap="toBannedKeywords"
            >
            </QListItem>-->
            <QListItem title="自动修改群名片"
                    :extra="nickSettingSwitchText"
                    :access="true"
                    @on-tap="toModifyQunCard">
                    v-if
            </QListItem>

        </QList>
        <QList>
            <QListItem title="群成员生日提醒" :noActiveClass="true">
                <QSwitch
                    slot="foot"
                    :checked="isBirthdayRemind"
                    @on-switch="switchBirthdayRemind"
                    :animationDelayTimes="1">
                </QSwitch>
            </QListItem>
        </QList>
        <QListInfo :title="`开启后，群成员生日时${enabledRobot && enabledRobot.name}会发送生日提醒`"></QListInfo>

        <div class="qui_button_wrapper">
            <button
                v-tap="{methods: removeRobot}"
                class="qui_button"
                :disabled="!(isEnabled)"
            >
                关闭群机器人
            </button>
        </div>
    </div>
</template>

<script>
    import RobotPanel from './_components/robot-panel.vue';
    import RobotInfoLevel from 'components/robot-info-level.vue';
    import RobotInfoLastMsg from 'components/robot-info-last-msg.vue';
    import { report, sb } from 'commons/report';
    import { openUrl, showTips } from 'commons/native';
    import { getQueryString } from 'commons/util';
    import value from 'commons/value';
    import { getRobot, getRobotsList } from './_commons/api';
    import robotsConfig, { assignRobotsConfig } from 'commons/robots-config';

    export default {
        data() {
            return {
                dataReturned: false,
                name: '',
                robotUin: getQueryString('robotUin') || getQueryString('robot_uin'),
                level: 0,
                robot: {},
                userRole: 0 // 0 群成员        1 群主    2 - 管理员
            };
        },
        components: {
            RobotInfoLevel,
            RobotInfoLastMsg,
            RobotPanel
        },
        created() {
            var vm = this;
            // 获取群内机器人信息

            getRobot({
                robot_uin: this.robotUin
            }).then(function (data) {
                vm.name = data.robot_data.name;
                vm.level = data.level;
                vm.robot = assignRobotsConfig([data.robot_data])[0];
                vm.userRole = data.role;

                report('profileExp', {
                    ver1: data.role === 0 ? 3 : data.role // cgi 的身份和产品要报的数值不对应，这里做一个转化
                });

                if (data.role === 1 || data.role === 2) { // 如果是群主或群管理员，则点击更多跳转到设置页
                    vm.setTitleButtons();
                }
                robotsConfig.forEach(function (robot) {
                    if (robot.robot_uin === vm.robot.robot_uin) {
                        vm.robot.avatar = robot.avatar;
                    }
                });
            }).catch(function (err) {
                showTips(err.message || '网络出错，请连接网络后尝试');
                sb(err, 'cgiError');
            });
        },
        methods: {
            setTitleButtons() {
                let vm = this;

                mqq.ui.setTitleButtons({
                    right: {
                        title: '更多',
                        callback: function () {
                            report('clickMore', { ver2: vm.userRole });

                            // 拉取机器人列表判断需要跳哪个页面
                            getRobotsList().then(function (data) {
                                data.robots_list = assignRobotsConfig(data.robots_list);

                                let hasSelectedRobot = false;

                                data.robots_list.some(function (robot) {
                                    if (robot.status === 1) { // 根据机器人状态来设定当前机器人，1：开启
                                        hasSelectedRobot = true;
                                        return true; // 中断some循环
                                    }
                                });

                                let url = value.url.robotSetting;

                                if (hasSelectedRobot) {
                                    // 已经开启了机器人
                                    url = value.url.groupSetting;
                                }

                                openUrl(url);
                            }).catch(function (err) {
                                if (typeof err === 'string') {
                                    return showTips(err);
                                }
                                showTips('当前网络不可用,请检查网络设置');
                                sb(err, 'cgiError');
                            });
                        }
                    }
                });
            }
        }
    };
</script>
