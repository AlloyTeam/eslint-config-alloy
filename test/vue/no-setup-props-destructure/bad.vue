<script>
export default {
  setup({ count }) {
    watch(() => {
      console.log(count); // not going to detect changes
    });

    return () => {
      return h('div', count); // not going to update
    };
  },
};
</script>
