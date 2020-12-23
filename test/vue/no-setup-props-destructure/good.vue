<script>
export default {
  setup(props) {
    watch(() => {
      console.log(props.count);
    });

    return () => {
      return h('div', props.count);
    };
  },
};
</script>
