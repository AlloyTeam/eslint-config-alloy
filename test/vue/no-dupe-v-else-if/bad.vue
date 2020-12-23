<template>
  <div v-if="isSomething(x)" />
  <div v-else-if="isSomething(x)" />

  <div v-if="a" />
  <div v-else-if="b" />
  <div v-else-if="c && d" />
  <div v-else-if="c && d" />

  <div v-if="n === 1" />
  <div v-else-if="n === 2" />
  <div v-else-if="n === 3" />
  <div v-else-if="n === 2" />
  <div v-else-if="n === 5" />
</template>
