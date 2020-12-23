<script>
export default {
  watch: {
    foo: (val, oldVal) => {
      console.log('new: %s, old: %s', val, oldVal);
    },
  },
};
</script>
