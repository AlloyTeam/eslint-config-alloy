<script>
import { nextTick as nt } from 'vue';

export default {
  async mounted() {
    nt();
    Vue.nextTick();
    this.$nextTick();
  },
};
</script>
