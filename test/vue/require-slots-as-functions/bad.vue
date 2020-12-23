<script>
export default {
  render(h) {
    var children = [...this.$slots.default];
    var children = this.$slots.default.filter(test);
  },
};
</script>
