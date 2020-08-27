<template>
  <div v-on="foo" />
  <div v-on:click="foo" />
  <div @click="foo" />
  <div @click.left="foo" />
  <div @click.prevent />
  <div @click.stop />
</template>
