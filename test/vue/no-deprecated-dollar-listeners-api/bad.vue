<template>
  <MyInput v-on="$listeners" />
</template>
<script>
export default {
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input() {
          /* */
        },
      };
    },
  },
};
</script>
