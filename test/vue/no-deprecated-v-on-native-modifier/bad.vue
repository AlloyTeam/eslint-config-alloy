<template>
  <CoolInput v-on:keydown.native="onKeydown" />
  <CoolInput @keydown.enter.native="onKeydownEnter" />
</template>
