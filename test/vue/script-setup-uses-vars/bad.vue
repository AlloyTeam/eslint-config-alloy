<script setup>
/* eslint no-unused-vars: "error", vue/script-setup-uses-vars: "off" */
// imported components are also directly usable in template
import Foo from './Foo.vue';
import { ref } from 'vue';

// write Composition API code just like in a normal setup()
// but no need to manually return everything
const count = ref(0);
const inc = () => {
  count.value++;
};
</script>

<template>
  <Foo :count="count" @click="inc" />
</template>
