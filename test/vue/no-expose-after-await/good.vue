<script>
import { watch } from 'vue';
export default {
  async setup(props, { expose }) {
    expose({});

    await doSomething();
  },
};
</script>
