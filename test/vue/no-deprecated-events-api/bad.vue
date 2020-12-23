<script>
export default {
  mounted() {
    this.$on('start', function (args) {
      console.log('start');
    });
    this.$emit('start');
  },
};
</script>
