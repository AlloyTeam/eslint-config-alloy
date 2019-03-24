<!-- good 语法正确的 v-bind -->
<template>
    <div>
        <div v-bind="foo"></div>
        <div v-bind:aaa="foo"></div>
        <div :aaa="foo"></div>
        <div :aaa.prop="foo"></div>
    </div>
</template>