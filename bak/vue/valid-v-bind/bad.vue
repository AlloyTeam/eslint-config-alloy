<!-- bad 语法错误的 v-bind -->
<template>
    <div>
        <div v-bind></div>
        <div :aaa></div>
        <div v-bind:aaa.bbb="foo"></div>
    </div>
</template>