<template>
  <MyComponent v-bind:aaa.sync="foo" />
  <MyComponent :aaa.sync="foo" />

  <div v-for="todo in todos">
    <MyComponent v-bind:aaa.sync="todo.name" />
    <MyComponent :aaa.sync="todo.name" />
  </div>
</template>
