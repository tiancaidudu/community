<template>
    <div class="app-header">
        <AppInfoBar />
        <div class="title">未来社区智能大脑</div>
        <div class="blocks">
            <div class="left"></div>
            <div class="middle">
                <div class="middle-left"></div>
                <div class="middle-right"></div>
                <div class="middle-middle">
                    <div class="middle-highlight"></div>
                </div>
            </div>
            <div class="right"></div>
        </div>
        <AppNav />
    </div>
</template>

<script>
import AppInfoBar from "./AppInfoBar";
import AppNav from "./AppNav";
export default {
    name: "AppHeader",
    components: { AppNav, AppInfoBar }
};
</script>

<style lang="scss" scoped>
$header-height: 138px;
.app-header {
    position: relative;
    width: 100%;
    height: $header-height;
    & /deep/ {
        .app-info-bar {
            width: 100%;
            height: 45px;
        }
    }
    .title {
        font-size: $font-size-extra-large;
        color: $text-color;
        @include text-shadow(3px);
        position: absolute;
        display: inline-block;
        text-align: center;
        left: 50%;
        top: 27px;
        font-weight: 500;
        transform: translateX(-50%);
        z-index: 3;
        line-height: 42px;
    }
    .blocks {
        height: 55px;
        width: 100%;
        position: relative;
        .left {
            position: relative;
            width: calc(50% - 150px - 30px);
            height: 48px;
            border-top: 1px solid $primary-border-color-light;
            &:after {
                position: absolute;
                content: "";
                width: 8px;
                height: 100%;
                right: -23px;
                top: -1px;
                transform: skewX(30deg);
                border: 1px solid $primary-border-color-light;
            }
        }
        .middle {
            width: 288px;
            height: 55px;
            position: absolute;
            left: calc(50% - 150px + 6px);
            top: 0;
            .middle-left {
                height: 48px;
                width: calc(50% - 65px - 3px);
                position: absolute;
                left: 0;
                top: 1px;
                border-bottom: 1px solid $primary-border-color-light;
            }
            .middle-right {
                height: 48px;
                width: calc(50% - 65px - 3px);
                position: absolute;
                right: 0;
                top: 1px;
                border-bottom: 1px solid $primary-border-color-light;
            }
            .middle-middle {
                height: 55px;
                width: 130px;
                position: absolute;
                bottom: 0;
                left: calc(50% - 65px);
                border-bottom: 1px solid $primary-border-color-light;
                &:before {
                    content: "";
                    position: absolute;
                    left: -2px;
                    bottom: 0;
                    width: 1px;
                    height: 6px;
                    background: $primary-border-color-light;
                    transform: skewX(30deg);
                }
                &:after {
                    content: "";
                    position: absolute;
                    right: -2px;
                    bottom: 0;
                    width: 1px;
                    height: 6px;
                    background: $primary-border-color-light;
                    transform: skewX(-30deg);
                }
                .middle-highlight {
                    width: calc(100% - 8px);
                    height: 6px;
                    background: $primary-color;
                    bottom: 4px;
                    left: 4px;
                    position: absolute;
                    &:before {
                        content: "";
                        position: absolute;
                        left: -2px;
                        top: 0;
                        width: 4px;
                        height: 6px;
                        background: $primary-color;
                        transform: skewX(30deg);
                    }
                    &:after {
                        content: "";
                        position: absolute;
                        right: -2px;
                        top: 0;
                        width: 4px;
                        height: 6px;
                        background: $primary-color;
                        transform: skewX(-30deg);
                    }
                }
            }
        }
        .right {
            position: absolute;
            right: 0;
            top: 0;
            width: calc(50% - 150px - 30px);
            height: 48px;
            border-top: 1px solid $primary-border-color-light;
            &:after {
                position: absolute;
                content: "";
                width: 8px;
                height: 100%;
                left: -23px;
                top: -1px;
                transform: skewX(-30deg);
                border: 1px solid $primary-border-color-light;
            }
        }
    }
    & /deep/ {
        .app-nav {
            position: relative;
            width: 100%;
            top: -30px;
        }
    }
}
</style>
