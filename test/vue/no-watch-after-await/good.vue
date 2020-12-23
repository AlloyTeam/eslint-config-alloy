<script>
import { watch } from 'vue';
export default {
  async setup() {
    watch(watchSource, () => {});

    await doSomething();
  },
};
</script>
