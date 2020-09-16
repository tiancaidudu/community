<template>
    <div class="app-info-bar">
        <el-dropdown trigger="click">
            <el-button type="default">登录</el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus">
                    狮子头
                </el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus-outline">
                    螺蛳粉
                </el-dropdown-item>
                <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-check">
                    蚵仔煎
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-button icon="login" @click="login"></el-button>
    </div>
</template>

<script>
import Auth from "../../api/auth";

export default {
    name: "AppInfoBar",
    methods: {
        login() {
            Auth.login(1, 2);
        }
    }
};
</script>

<style scoped></style>
