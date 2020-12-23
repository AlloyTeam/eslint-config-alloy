<template>
  <button @click="$emit('myEvent')" />
</template>
<script>
export default {
  methods: {
    onClick() {
      this.$emit('myEvent');
    },
  },
};
</script>
