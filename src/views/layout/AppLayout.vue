<template>
    <div class="app-layout">
        <AppHeader />
        <div class="app-main">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import AppHeader from "./AppHeader";
export default {
    name: "AppLayout",
    components: { AppHeader }
};
</script>

<style lang="scss" scoped>
.app-layout {
    .app-main {
        padding: 17px 40px;
    }
}
</style>
