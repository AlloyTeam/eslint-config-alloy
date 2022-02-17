<template>
  <div v-text="content"></div>
  <div v-html="html"></div>
  <MyComponent>{{ content }}</MyComponent>
</template>
