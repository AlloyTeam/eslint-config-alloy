<template>
  <input v-on:keyup.page-down="onArrowUp" />
  <input @keyup.page-down="onArrowUp" />
  <input @keyup.9="onArrowUp" />
  <!-- 9 is KeyboardEvent.key -->
</template>
