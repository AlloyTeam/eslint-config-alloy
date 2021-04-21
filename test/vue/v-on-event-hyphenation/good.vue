<template>
  <MyComponent v-on:custom-event="handleEvent" />
  <MyComponent @custom-event="handleEvent" />
</template>
