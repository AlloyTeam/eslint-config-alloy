<template>
  <template v-if="foo">...</template>
  <template v-if="foo">...</template>
  <template v-else-if="foo">...</template>
  <template v-else>...</template>
  <template v-for="i in foo" :key="i">...</template>
  <template v-slot:foo>...</template>

  <template class="heading">...</template>
  <template :bar="i">...</template>
  <template ref="input">...</template>
  <template @click="click">...</template>
</template>
