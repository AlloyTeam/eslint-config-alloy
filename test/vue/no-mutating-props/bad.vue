<template>
  <div>
    <input v-model="value" @click="openModal" />
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
      this.value = 'test';
    },
  },
};
</script>
