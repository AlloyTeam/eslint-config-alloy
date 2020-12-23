<script>
export default {
  props: {
    a: String,
    b: {
      default(props) {
        /* ✓ GOOD */
        return props.a;
      },
    },
  },
};
</script>
