<template>
    <div
        class="nav-button"
        :class="{ 'is-active': active }"
        @click="handleClick"
    >
        <span>
            <slot>
                {{ label }}
            </slot>
        </span>
    </div>
</template>

<script>
import emitter from "element-ui/src/mixins/emitter";
export default {
    name: "NavButton",
    mixins: [emitter],
    componentName: "NavButton",
    data() {
        return {
            active: false
        };
    },
    props: {
        label: {
            type: String,
            default: ""
        },
        link: {
            type: [String, Object],
            default: ""
        },
        name: {
            type: String,
            default: "",
            required: true
        }
    },
    methods: {
        handleClick() {
            if (this.link) {
                if (typeof this.link === "string") {
                    this.$router.push({
                        path: this.link
                    });
                } else {
                    this.$router.push(this.link);
                }
            }
            this.$emit("click", this.name);
            this.dispatch("NavGroup", "change", this.name);
        }
    },
    created() {
        this.$on("change", val => {
            this.active = val === this.name;
        });
    },
    beforeDestroy() {
        this.$off("change");
    }
};
</script>

<style lang="scss" scoped>
.nav-button {
    border: 1px solid $primary-color;
    padding: 4px;
    color: $text-color;
    text-align: center;
    height: 40px;
    min-width: 80px;
    cursor: pointer;
    span {
        display: block;
        height: 30px;
        background: $primary-color-light3;
        font-size: $font-size-large;
        line-height: 30px;
    }
    &.is-active {
        span {
            background: $primary-color;
        }
    }
}
</style>
