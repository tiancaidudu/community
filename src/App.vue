<template>
    <div id="app">
        <AppLayout>
            <router-view></router-view>
        </AppLayout>
    </div>
</template>

<script>
import AppLayout from "./views/layout/AppLayout";

export default {
    name: "app",
    components: {
        AppLayout
    }
};
</script>

<style>
#app {
}
</style>
