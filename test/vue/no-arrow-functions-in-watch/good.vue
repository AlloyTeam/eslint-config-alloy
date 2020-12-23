<script>
export default {
  watch: {
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal);
    },
    b: 'someMethod',
  },
};
</script>
