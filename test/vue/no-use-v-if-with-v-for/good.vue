<template>
  <ul v-if="complete">
    <TodoItem v-for="todo in todos" />
  </ul>
</template>
