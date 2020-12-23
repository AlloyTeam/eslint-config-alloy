<script>
export default {
  emits: {
    qux: function () {},
    quux(evt) {
      if (!evt) {
        return false;
      }
    },
  },
};
</script>
