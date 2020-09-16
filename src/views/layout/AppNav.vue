<template>
    <NavGroup class="app-nav" v-model="current">
        <div class="left">
            <NavButton link="/" name="Home" label="社区总览" />
            <NavButton link="/about" name="About" label="智能通行" />
            <NavButton link="/home" name="Home" label="社区总览" />
            <NavButton link="/about" name="About" label="智能通行" />
        </div>
        <div class="right">
            <NavButton link="/" name="Home" label="社区总览" />
            <NavButton link="/about" name="About" label="智能通行" />
            <NavButton link="/home" name="Home" label="社区总览" />
            <NavButton link="/about" name="About" label="智能通行" />
        </div>
    </NavGroup>
</template>

<script>
import NavGroup from "../../components/nav/NavGroup";
import NavButton from "../../components/nav/NavButton";
export default {
    name: "AppNav",
    components: { NavButton, NavGroup },
    data() {
        return {
            current: "Home"
        };
    }
};
</script>

<style lang="scss" scoped>
.app-nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left,
    .right {
        width: calc(50% - 180px);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 20px;
        /deep/ {
            .nav-button {
                flex-basis: calc(25% - 30px);
                & + .nav-button {
                    margin-left: 40px;
                }
            }
        }
    }
}
</style>
