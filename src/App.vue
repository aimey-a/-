<template>
    <div id="app">
        <navigationBat></navigationBat>
        <router-view />
      
            <forbta class="forbta"></forbta>
       
    </div>
</template>
<script>
import DevicePixelRatio from "./utils/devicePixelRatio";
export default {
    name: "App",
    created() {
        new DevicePixelRatio().init();
    },
};
</script>
<style lang="scss">
body {
    padding: 0;
    margin: 0;
    background-color: #e9eae2;
    min-width: 1630px;
}
</style>
