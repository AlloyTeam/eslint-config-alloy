<template>
  <div>
    <input :value="value" @input="$emit('input', $event.target.value)" @click="openModal" />
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    openModal() {
      this.$emit('input', 'test');
    },
  },
};
</script>
