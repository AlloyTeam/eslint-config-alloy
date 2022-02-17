<script>
import { watch } from 'vue';
export default {
  async setup(props, { expose }) {
    await doSomething();

    expose({});
  },
};
</script>
