<script>
import { ref } from 'vue';
const count = ref(0);
const v3 = computed(() => count.value /* ✓ GOOD */);
const v5 = fn(count); /* ✓ GOOD */
const v6 = computed(() => fn(count.value) /* ✓ GOOD */);
</script>
