<script>
export default {
    computed: {
        foo() {
            if (this.bar) {
                return this.bar;
            }
        }
    }
};
</script>
