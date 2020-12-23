<script>
import { watch } from 'vue';
export default {
  async setup() {
    await doSomething();

    watch(watchSource, () => {});
  },
};
</script>
