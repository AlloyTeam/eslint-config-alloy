<template>
  <MyComponent v-bind:propName.sync="foo" />
  <MyComponent v-bind:[dynamiArg].sync="foo" />
  <MyComponent v-bind.sync="foo" />
  <MyComponent :propName.sync="foo" />
</template>
