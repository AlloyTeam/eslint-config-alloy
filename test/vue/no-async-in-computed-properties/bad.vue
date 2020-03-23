<script>
export default {
    computed: {
        foo: async function () {
            return await someFunc();
        },
        bar() {
            return new Promise();
        },
        baz() {
            setTimeout(() => {}, 0);
        }
    }
};
</script>
