<script>
export default {
  data() {
    return {
      dataString: 'dataString',
    };
  },
  computed: {
    computedReturnDataString() {
      return this.dataString;
    },
  },
  methods: {
    fn() {
      this.computedReturnDataString;
    },
  },
};
</script>
