<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const ok = ref(true);

    count++;
    count + 1;
    1 + count;
    var msg = ok ? 'yes' : 'no';

    return {
      count,
    };
  },
};
</script>
