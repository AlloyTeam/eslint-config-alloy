<template>
  <div v-for="todo in todos" />
  <MyComponent v-for="todo in todos" :key="todo.id" />
  <div v-for="todo in todos" :is="MyComponent" :key="todo.id" />
</template>
