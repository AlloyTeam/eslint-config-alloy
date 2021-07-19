<script>
export default {
  beforeRouteEnter() {
    this.method(); // Uncaught TypeError: Cannot read property 'method' of undefined
    this.attribute = 42;
    if (this.value === 42) {
    }
    this.attribute = this.method();
  },
};
</script>
