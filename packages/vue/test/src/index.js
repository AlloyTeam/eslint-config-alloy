/**
 * Created by jeffjing on 2016/12/22.
 */
import Vue from 'vue';
import Index from './index.vue';
import store from './store';
import VueTap from '../../library/v-tap';
import QList from '../../components/list';
import QListItem from '../../components/list-item';
import QSwitch from '../../components/switch';
import QListInfo from '../../components/list-info';
import { report } from 'commons/report';
import value from 'commons/value';
import { showDialog, showTips } from 'commons/native';
import FastClick from 'fastclick';

FastClick.attach(document.body);

// 不支持 mqq.ui.webviewCanScroll，只能invoke
mqq.invoke('ui', 'webviewCanScroll', { enable: false });
mqq.invoke('ui', 'disableWebviewLongPress', { enable: false });
mqq.invoke('ui', 'disableLongPress', { enable: false });

Vue.component(QList.name, QList);
Vue.component(QListItem.name, QListItem);
Vue.component(QSwitch.name, QSwitch);
Vue.component(QListInfo.name, QListInfo);

Vue.use(VueTap);

if (!value.gc || value._wv === 512027 || !value._wv || mqq.compare('6.7.0') === -1 || !value.uin) {
    report('fakeSettingPV');
}
else {
    report('settingPV');
}

if (!value.gc || !value.uin) {
    showTips('请在手机QQ-群管理-设置群机器人中打开');
}
else {
    new Vue({
        el: '#J_setting',
        store,
        render: h => h(Index)
    });
}

if (value.isTest) {
    showDialog('您已进入群机器人测试环境', `您的群号为${value.gc}, wv为${value._wv}, qq版本${mqq.QQVersion}`);
}

new Vue({
    el: '#J_qunRobot',
    render: h => h(Index)
});