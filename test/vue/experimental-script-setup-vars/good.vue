<script setup="props, { emit }">
/* eslint no-undef: 'error' */
import { watchEffect } from 'vue';

watchEffect(() => console.log(props.msg));
emit('foo');
</script>
