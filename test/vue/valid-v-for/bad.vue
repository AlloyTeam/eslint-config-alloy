<template>
    <div v-for />
    <div v-for:aaa="todo in todos" />
    <div v-for.bbb="todo in todos" />
    <div v-for="todo in todos" is="MyComponent" />
    <MyComponent v-for="todo in todos" />
    <MyComponent v-for="todo in todos" :key="foo" />
</template>
