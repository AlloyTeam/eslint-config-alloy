<script>
import mitt from 'mitt';
const emitter = mitt();
export default {
  mounted() {
    emitter.on('start', function (args) {
      console.log('start');
    });
    emitter.emit('start');
  },
};
</script>
