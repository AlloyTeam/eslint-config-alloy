<template>
  <template v-for="todo in todos">
    <Foo :key="todo" />
  </template>
</template>
