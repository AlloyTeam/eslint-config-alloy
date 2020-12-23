<template>
  <div @click="$emit('bad')" />
</template>
<script>
export default {
  emits: ['good'],
};
</script>
