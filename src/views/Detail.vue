<template>
    <div class="Detail">
        <div class="Detail_top">
            <el-image
                class="body_img_url"
                :src="back"
                fit="fill"
            ></el-image>
            <div class="detail_name">
                <a class="detail_name_a"> {{infoData.title}}</a>
            </div>
             <el-button
                    type="info"
                    @click="imgDownload()"
                >下载图片</el-button>
            <div class="el_elke">
                <el-carousel
                    indicator-position="none"
                    arrow="never"
                    style=" width:800px"
                    :interval="4000"
                    @change="changeCampus"
                    ref="remarkCarusel"
                >
                    <el-carousel-item
                        v-for="(n,index) in infoData.imagesa"
                        :key="index"
                        name="index"
                        class="el_carousel"
                    >
                        <el-image
                            class="ime"
                            :src="n"
                            fit="fit"
                        ></el-image>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="min">
                <div
                    v-for="(n,index) in infoData.imagesa"
                    :key="index"
                >
                    <el-image
                        @mouseenter="changeCampusIndex(index)"
                        class="imew"
                        :src="n"
                        fit="fit"
                    ></el-image>
                </div>
            </div>
            <div class="Detail_button">
                <el-button
                    type="info"
                    v-for="i in infoData.images"
                    :key="i"
                    @click="imgDownload(i)"
                >下载图片</el-button>
            </div>
            <div class="introduce">
                <div class="introduce_text">
                    <p><a class="introduce_text_a">材</a>质：{{infoData.years}}</p>
                    <p><a class="introduce_text_a">年</a>代：{{infoData.material}}</p>
                    <p><a class="introduce_text_a">简</a>介：{{infoData.introduction}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import back from "../assets/img/aa.jpg";
import back3 from "../assets/img/a1.jpg";
import back4 from "../assets/img/a2.jpg";
export default {
    name: "Detail",
    data() {
        return {
            back: back,
            uuid: null,
            backArrGather: [back3, back4],
            current: null,
            dataInfo: {
                name: "‘V’形符号饼形金",
                era: "金",
                material: "汉代",
                introduction:
                    "圆形饼状，以纯度极高的黄金铸造，有明显的浇筑痕迹，并有较多气孔，刻有不可释读的“V”形符号，是刘贺拟奉献给汉宣帝的酎金。",
            },
            infoData: {},
        };
    },
    props: [],
    components: {},
    created() {
        this.uuid = this.$route.query.uuid;
        this.getInfo();
    },
    mounted() {},
    methods: {
        // 轮播图
        changeCampus(val) {
            this.current = val;
        },
        changeCampusIndex(index) {
            this.$refs.remarkCarusel.setActiveItem(index);
        },
        // imgDownload(e) {
        // this.$axios
        //     .get("image" + e,)
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => {});
        // },
        // //地址转文件
        changeBlob(e) {
            return new Promise((resolve) => {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", e, true);
                xhr.responseType = "blob";
                xhr.onload = () => {
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    }
                };
                xhr.send();
            });
        },

        //像接口一样调用
        imgDownload(e) {
            this.changeBlob(
                "https://img-blog.csdnimg.cn/20200402103310727.png"
            ).then((res) => {
                console.log(res);
                this.saveAs(res, "pic");
            });
        },
        //下载文件
        saveAs(blob, filename) {
            var link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = filename;
            link.click();
        },
        getInfo() {
            this.$axios
                .get("v1/cultural", {
                    params: {
                        id: this.uuid,
                    },
                })
                .then((res) => {
                    var infoData = res.data.data;
                    infoData.imagesa = [];
                    for (let i = 0; i < infoData.images.length; i++) {
                        infoData.imagesa[i] =
                            "http://l2636i3287.wicp.vip/" + infoData.images[i];
                    }
                    this.infoData = infoData;
                })
                .catch((err) => {});
        },
    },
};
</script>
<style lang="scss" scoped>
.detail_name {
    width: 100%;
    text-align: center;
    font-family: "方正舒体";
    font-size: 50px;
    padding: 20px;
    margin: 20px;
    .detail_name_a {
        border-style: dotted solid dashed solid;
        border-color: #e9eae2;
        border-width: 10px;
        padding: 10px;
    }
}
.body_img_url {
    width: 100%;
    height: 200px;
}
.Detail_top {
    padding-top: 48px;
    background-color: #fbfbfb;
    margin: 0 10%;
}
.el_elke {
    display: flex;
    justify-content: center;
}

.min {
    display: flex;
    justify-content: center;
    margin: 20px;
    .imew {
        // margin: 0;
        margin: 0 10px;
        width: 150px;
        height: 130px;
    }
}
.Detail_button {
    text-align: center;
}
.introduce {
    display: flex;
    justify-content: center;
    .introduce_text {
        width: 800px;
        font-size: 30px;
        color: #424242;
        font-family: "楷体";
        p {
            line-height: 40px;
        }
        .introduce_text_a {
            letter-spacing: 1em;
        }
    }
}

::v-deep .el-carousel__container {
    height: 700px;
    .ime {
        width: 800px;
        height: 100%;
    }
}
::v-deep .el-button--info {
    background-color: #c1c1c1;
    border-color: #c1c1c1;
    width: 150px;
    height: 50px;
    font-size: 25px;
    margin: 0 10px;
}
</style>
