<template>
    <div class="nav">
        <div class="head">
            <div class="top">
                <div class="WordArt">
                    漢代海昏侯墓出土文物圖案紋飾數字化博物館
                </div>
                <div class="top_menu">
                    <el-menu
                        :default-active="this.$router.path"
                        router
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                    >
                        <el-menu-item index="/">首页</el-menu-item>
                        <el-menu-item index="/List">文物展示</el-menu-item>
                        <!-- <el-menu-item>文物故事</el-menu-item> -->
                        <el-menu-item index="/About">关于我们</el-menu-item>
                    </el-menu>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            searchInput: "",
            imputState: false,
        };
    },
    props: [],
    components: {},
    created() {},
    mounted() {},
    methods: {
        handleSelect(key, keyPath) {},
    },
};
</script>
<style lang="scss" scoped>
.head {
    background-color: transparent !important; /* 背景透明 */
    width: 100%;
    min-width: 1630px;
    z-index: 10;
    position: absolute;
}
.top {
    display: flex;
    width: 100%;
    background: #ecc797;
    opacity: 0.8;
    justify-content: space-between;
    align-items: center;
    height: 100px;
}
.WordArt {
    padding: 0 10px;
    font-size: 35px;
    color: #832828;
    font-family: "华文楷体";
    cursor: pointer;
    flex: 2;
    line-height: 60px;
}
.top_menu {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

::v-deep .el-menu {
    background-color: transparent !important; /* 背景透明 */
    color: #fff !important;
}
::v-deep .el-menu--horizontal > .el-menu-item,
::v-deep .el-menu--horizontal > .el-submenu .el-submenu__title {
    font-size: 30px;
}
::v-deep .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
::v-deep .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
::v-deep .el-menu--horizontal > .el-submenu .el-submenu__title:hover,
::v-deep .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
::v-deep .el-menu--horizontal .el-menu-item:not(.is-disabled):hover,
::v-deep .el-menu--horizontal .el-menu .el-menu-item.is-active,
::v-deep
    .el-menu--horizontal
    .el-menu
    .el-submenu.is-active
    > .el-submenu__title {
    background-color: transparent !important; /* 背景透明 */
    // background-color: #000;
    color: #832828;
}
::v-deep .el-menu--horizontal > .el-menu-item.is-active,
::v-deep .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
    border-bottom: 2px solid #832828;
    color: #832828;
}
::v-deep .el-menu--horizontal > .el-menu-item,
::v-deep .el-menu--horizontal > .el-submenu .el-submenu__title {
    color: rgb(255, 255, 255);
}
::v-deep .el-menu--collapse .el-menu .el-submenu,
::v-deep .el-menu--popup {
    min-width: 132px;
}
::v-deep .el-menu--popup-bottom-start {
    margin-top: 2px;
}
::v-deep .el-submenu__title,
::v-deep .el-menu-item {
    font-size: 18px;
}
::v-deep .el-menu.el-menu--horizontal {
    border-bottom: solid 0px;
}
::v-deep .el-menu--horizontal .el-menu .el-menu-item,
::v-deep .el-menu--horizontal .el-menu .el-submenu__title {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
::v-deep .el-input__inner {
    height: 50px;
    line-height: 50px;
    font-size: 20px;
}
::v-deep .el-input--suffix {
    width: 80%;
}
</style>
