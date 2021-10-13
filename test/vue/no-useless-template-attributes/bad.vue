<template>
  <template v-if="foo" class="heading">...</template>
  <template v-for="i in foo" :bar="i">...</template>
  <template v-slot:foo="foo" ref="input">...</template>
  <template v-if="foo" @click="click">...</template>
</template>
