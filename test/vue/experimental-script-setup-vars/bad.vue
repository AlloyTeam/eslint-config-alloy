<script setup="props, { emit }">
/* eslint no-undef: 'error', vue/experimental-script-setup-vars: 'off' */
import { watchEffect } from 'vue';

watchEffect(() => console.log(props.msg));
emit('foo');
</script>
