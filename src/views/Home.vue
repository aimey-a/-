<template>
    <div class="home">
        <div class="top_img">
            <el-image
                v-cloak
                style="width: 100%; height: 100%"
                :src="back"
                fit="fill"
            ></el-image>
        </div>
        <div class="body_img">
            <div class="body_img_left">
                <el-image
                    class="body_img_url"
                    :src="gifI"
                    fit="fill"
                ></el-image>
            </div>
            <div class="body_img_right">
                <el-carousel
                    class="carousel_img"
                    arrow="never"
                >
                    <el-carousel-item
                        v-for="(i,e) in culturalRelicImg[0].images"
                        :key="e"
                    >
                        <el-image
                            class="body_img_url"
                            :src="'http://l2636i3287.wicp.vip/'+i"
                            fit="fill"
                            @mouseover="a1=false;"
                            @mouseout="a1=true;"
                        ></el-image>
                        <a
                            @mouseover="a1=false;"
                            @mouseout="a1=true;"
                            class="body_img_text"
                            :class="a1==false?'':'done'"
                        >{{culturalRelicImg[0].title}}</a>
                    </el-carousel-item>
                </el-carousel>
                <el-carousel
                    class="
                            carousel_img"
                    arrow="never"
                >
                    <el-carousel-item
                        v-for="(i,e) in culturalRelicImg[1].images"
                        :key="e"
                    >
                        <el-image
                            class="body_img_url"
                            :src="'http://l2636i3287.wicp.vip/'+i"
                            fit="fill"
                            @mouseover="a2=false;"
                            @mouseout="a2=true;"
                        ></el-image>
                        <a
                            @mouseover="a2=false;"
                            @mouseout="a2=true;"
                            class="body_img_text"
                            :class="a2==false?'':'done'"
                        >{{culturalRelicImg[1].title}}</a>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div class="body_img">
            <div class="body_img_right">
                <el-carousel
                    class="carousel_img"
                    arrow="never"
                >
                    <el-carousel-item
                        v-for="(i,e) in culturalRelicImg[2].images"
                        :key="e"
                    >
                        <el-image
                            class="body_img_url"
                            :src="'http://l2636i3287.wicp.vip/'+i"
                            fit="fill"
                            @mouseover="a3=false;"
                            @mouseout="a3=true;"
                        ></el-image>
                        <a
                            @mouseover="a3=false;"
                            @mouseout="a3=true;"
                            class="body_img_text"
                            :class="a3==false?'':'done'"
                        >{{culturalRelicImg[2].title}}</a>
                    </el-carousel-item>
                </el-carousel>
                <el-carousel
                    class="carousel_img"
                    arrow="never"
                >
                    <el-carousel-item
                        v-for="(i,e) in culturalRelicImg[2].images"
                        :key="e"
                    >
                        <el-image
                            class="body_img_url"
                            :src="'http://l2636i3287.wicp.vip/'+i"
                            fit="fill"
                            @mouseover="a4=false;"
                            @mouseout="a4=true;"
                        ></el-image>
                        <a
                            @mouseover="a4=false;"
                            @mouseout="a4=true;"
                            class="body_img_text"
                            :class="a4==false?'':'done'"
                        >{{culturalRelicImg[2].title}}</a>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="body_img_left">
                <el-image
                    class="body_img_url"
                    :src="gifI"
                    fit="fill"
                ></el-image>
            </div>
        </div>

    </div>
</template>

<script>
import back from "../assets/img/99.jpg";
import back1 from "../assets/img/a1.jpg";
import back2 from "../assets/img/a2.jpg";
import gifI from "../assets/img/1.gif";
import back3 from "../assets/img/a3.jpg";
import back4 from "../assets/img/a4.jpg";
import forbta from "../components/forbta/forbta.vue";
export default {
    components: { forbta },
    name: "Home",
    data() {
        return {
            back,
            gifI,
            backArrGather: [
                [
                    { url: back1, text: "“V”形符号饼形金" },
                    { url: back2, text: "“昌邑籍田”三足青铜鼎" },
                    { url: back3, text: "“大刘记印”龟纽玉印" },
                    { url: back4, text: "“海”字青铜印" },
                ],
                [
                    { url: back2, text: "“昌邑籍田”三足青铜鼎" },
                    { url: back3, text: "“大刘记印”龟纽玉印" },
                    { url: back4, text: "“海”字青铜印" },
                    { url: back1, text: "“V”形符号饼形金" },
                ],
            ],
            backArrGather1: [
                [
                    { url: back3, text: "“大刘记印”龟纽玉印" },
                    { url: back4, text: "“海”字青铜印" },
                    { url: back1, text: "“V”形符号饼形金" },
                    { url: back2, text: "“昌邑籍田”三足青铜鼎" },
                ],
                [
                    { url: back4, text: "“海”字青铜印" },
                    { url: back1, text: "“V”形符号饼形金" },
                    { url: back2, text: "“昌邑籍田”三足青铜鼎" },
                    { url: back3, text: "“大刘记印”龟纽玉印" },
                ],
            ],
            culturalRelicImg: [],
            carouselInterval: 2000,
            a1: true,
            a2: true,
            a3: true,
            a4: true,
        };
    },
    props: [],
    created() {
        this.getCarousel();
    },
    mounted() {},
    methods: {
        getCarousel() {
            this.$axios
                .get("/image", {})
                .then((res) => {
                    this.culturalRelicImg = res.data.data;
                })
                .catch((err) => {});
        },
    },
};
</script>
<style lang="scss" scoped>
.home {
    .body_img {
        display: flex;
        margin: 20px 10%;
        .body_img_left {
            flex: 1;
        }
        .body_img_right {
            display: flex;
            flex: 1;
        }
    }
    .body_img_url {
        height: 500px;
        width: 100%;
    }
    .body_img_text {
        width: 100%;
        text-align: center;
        padding: 5px;
        position: absolute;
        bottom: 5px;
        left: 0px;
        background-color: rgb(122, 122, 122);
        color: #fff;
        opacity: 0.9;
    }
    .carousel_img {
        width: 50%;
        ::v-deep .el-carousel__container {
            height: 100%;
        }
        .body_img_url {
            width: 100%;
        }
    }
    .done {
        display: none;
    }
}

::v-deep .el-carousel__indicators--horizontal {
    display: none;
}
</style>
