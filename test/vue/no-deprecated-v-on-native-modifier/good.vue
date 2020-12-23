<template>
  <CoolInput v-on:keydown.enter="onKeydownEnter" />
  <CoolInput @keydown.enter="onKeydownEnter" />
</template>
