<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const ok = ref(true);

    count.value++;
    count.value + 1;
    1 + count.value;
    var msg = ok.value ? 'yes' : 'no';

    return {
      count,
    };
  },
};
</script>
