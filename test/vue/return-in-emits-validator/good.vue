<script>
export default {
  emits: {
    foo(evt) {
      if (evt) {
        return true;
      } else {
        return false;
      }
    },
    bar: function () {
      return true;
    },
    baz(evt) {
      if (evt) {
        return true;
      }
    },
  },
};
</script>
