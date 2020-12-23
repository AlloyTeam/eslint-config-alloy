<template>
  <tr v-is:a="foo"></tr>
  <tr v-is.m="foo"></tr>
  <tr v-is></tr>
  <tr v-is=""></tr>
  <MyComponent v-is="foo" />
</template>
