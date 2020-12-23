<script>
import { onMounted } from 'vue';
export default {
  async setup() {
    await doSomething();

    onMounted(() => {});
  },
};
</script>
