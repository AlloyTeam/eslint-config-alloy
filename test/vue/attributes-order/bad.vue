<template>
  <div
    ref="header"
    v-for="item in items"
    v-once
    id="uniqueID"
    v-model="headerData"
    my-prop="prop"
    v-if="!visible"
    is="header"
    @click="functionCall"
    v-text="textContent"
  />
</template>
