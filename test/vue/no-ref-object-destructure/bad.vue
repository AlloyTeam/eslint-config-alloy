<script>
import { ref } from 'vue';
const count = ref(0);
const v1 = count.value; /* ✗ BAD */
const { value: v2 } = count; /* ✗ BAD */
const v4 = fn(count.value); /* ✗ BAD */
</script>
