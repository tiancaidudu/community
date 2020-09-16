<template>
    <div class="nav-group">
        <slot></slot>
    </div>
</template>

<script>
import emitter from "element-ui/src/mixins/emitter";
export default {
    name: "NavGroup",
    mixins: [emitter],
    componentName: "NavGroup",
    props: {
        value: {
            type: String,
            default: ""
        }
    },
    methods: {
        handleChange(name) {
            this.$emit("input", name);
        }
    },
    watch: {
        value: {
            immediate: true,
            handler(val, oldVal) {
                if (val !== oldVal) {
                    this.broadcast("NavButton", "change", val);
                }
            }
        },
        $route(val) {
            this.$emit("input", val.meta.navName || val.name);
        }
    },
    created() {
        this.$on("change", this.handleChange);
    },
    beforeDestroy() {
        this.$off("change");
    }
};
</script>

<style scoped></style>
