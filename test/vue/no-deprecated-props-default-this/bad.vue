<script>
export default {
  props: {
    a: String,
    b: {
      default() {
        return this.a;
      },
    },
  },
};
</script>
