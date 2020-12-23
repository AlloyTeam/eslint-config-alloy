<script>
export default {
  emits: ['good'],
  methods: {
    foo() {
      this.$emit('good');
    },
  },
};
</script>
