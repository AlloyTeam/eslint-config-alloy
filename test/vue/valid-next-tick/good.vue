<script>
import { nextTick as nt } from 'vue';

export default {
  async mounted() {
    await nt();
    await Vue.nextTick();
    await this.$nextTick();
  },
};
</script>
