<template>
  <MyComponent v-bind:aaa.sync="foo + bar" />
  <MyComponent :aaa.sync="foo + bar" />

  <input v-bind:aaa.sync="foo" />
  <input :aaa.sync="foo" />

  <div v-for="todo in todos">
    <MyComponent v-bind:aaa.sync="todo" />
    <MyComponent :aaa.sync="todo" />
  </div>
</template>
