<template>
  <MyComponent v-on:customEvent="handleEvent" />
  <MyComponent @customEvent="handleEvent" />
</template>
