<template>
  <input v-model="foo" />
  <input v-model.lazy="foo" />
  <textarea v-model="foo" />
  <MyComponent v-model="foo" />
  <div v-for="todo in todos">
    <input v-model="todo.name" />
  </div>
</template>
