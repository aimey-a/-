<template>
    <div class="List">
        <div class="cen">
            <el-image
                class="body_img_url"
                :src="back"
                fit="fill"
            ></el-image>
            <div class="setInput">
                <div
                    class="search"
                    @click="skuNameSearch()"
                >
                    搜索
                </div>
                <div class="inp_validate">
                    <input
                        type="text"
                        class="validate"
                        v-model="searchInput"
                        @keyup.enter="skuNameSearch()"
                    >
                </div>
            </div>
            <div class="cen_List">
                <div
                    v-for="(e,i) in  listData.list"
                    :key="i"
                    class="cen_List_img"
                    @click="getDetail(e.id)"
                >
                    <div class="cen_List_img_for">
                        <el-image
                            class="cen_List_img_url"
                            :src="'http://l2636i3287.wicp.vip/'+e.images[0]"
                            fit="fill"
                        ></el-image>
                    </div>
                    <div class="cen_List_img_text">{{e.title}}</div>
                </div>
            </div>
            <div class="frib">
                <el-pagination
                    hide-on-single-page
                    layout="prev, pager, next"
                    :total="listData.total"
                    @current-change="handleCurrentChange"
                    :page-size="listData.pageSize"
                    :current-page="currentPage"
                >
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import back from "../assets/img/aa.jpg";
import back3 from "../assets/img/a1.jpg";
export default {
    name: "",
    data() {
        return {
            back: back,
            backArr: [
                {
                    id: 0,
                    url: back3,
                    text: "青铜器",
                },
                {
                    id: 1,
                    url: back3,
                    text: "青铜器",
                },
                {
                    id: 2,
                    url: back3,
                    text: "青铜器",
                },
                {
                    id: 3,
                    url: back3,
                    text: "青铜器",
                },
                {
                    id: 4,
                    url: back3,
                    text: "青铜器",
                },
                {
                    id: 5,
                    url: back3,
                    text: "青铜器",
                },
                {
                    id: 6,
                    url: back3,
                    text: "青铜器",
                },
                {
                    id: 7,
                    url: back3,
                    text: "青铜器",
                },
                {
                    id: 8,
                    url: back3,
                    text: "青铜器",
                },
                {
                    id: 9,
                    url: back3,
                    text: "青铜器",
                },
                {
                    id: 10,
                    url: back3,
                    text: "青铜器",
                },
                {
                    id: 11,
                    url: back3,
                    text: "青铜器",
                },
            ],
            listData: [],
            currentPage: 1,
            searchInput: "",
        };
    },
    props: [],
    components: {},
    created() {
        this.getListData();
    },
    mounted() {},
    methods: {
        handleCurrentChange(val) {
            this.getListData(val);
        },
        skuNameSearch() {
            this.$axios
                .get("v1/search", {
                    params: {
                        key: this.searchInput,
                    },
                })
                .then((res) => {
                    this.listData = res.data;
                })
                .catch((err) => {});
        },
        getDetail(e) {
            this.$router.push({
                path: "/Detail",
                query: {
                    uuid: e,
                },
            });
        },
        getListData(e) {
            this.$axios
                .get("v1/all", {
                    params: { pageNum: e },
                })
                .then((res) => {
                    this.listData = res.data.data;
                    window.scrollTo(0, 0);
                })
                .catch((err) => {});
        },
    },
};
</script>
<style lang="scss" scoped>
.List {
    padding-top: 48px;
    .cen {
        background-color: #fbfbfb;
        margin: 0 10%;
        .body_img_url {
            width: 100%;
            height: 200px;
        }
    }
    .cen_List {
        padding: 0 10%;
        display: flex;
        flex-wrap: wrap;
        min-height: 1000px;
        .cen_List_img {
            width: 23%;
            margin: 0.5% 1%;
            cursor: pointer;
            .cen_List_img_for {
                width: 100%;
                height: 300px;
                overflow: hidden;
                .cen_List_img_url {
                    width: 100%;
                    height: 300px;
                    border-radius: 5px;
                    transition: all 1s;
                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }

            .cen_List_img_text {
                text-align: center;
                color: #832828;
                background-color: #e9eae2;
            }
        }
    }
    .frib {
        width: 100%;
        text-align: center;
        padding: 30px 0;
    }
    .setInput {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px;
        .search {
            padding: 0 1rem;
            cursor: pointer;
            color: #c0b3a0;
            font-size: 30px;
            // &:active {
            //     color: #832828;
            // }
        }
        .inp_validate {
            padding-top: 20px;
            .validate {
                width: 300px;
                color: #c0b3a0;
            }
        }

        input:not([type]),
        input[type="text"]:not(.browser-default),
        input[type="password"]:not(.browser-default),
        input[type="email"]:not(.browser-default),
        input[type="url"]:not(.browser-default),
        input[type="time"]:not(.browser-default),
        input[type="date"]:not(.browser-default),
        input[type="datetime"]:not(.browser-default),
        input[type="datetime-local"]:not(.browser-default),
        input[type="tel"]:not(.browser-default),
        input[type="number"]:not(.browser-default),
        input[type="search"]:not(.browser-default),
        textarea.materialize-textarea {
            background-color: transparent;
            border: none;
            border-bottom: 1px solid #000000;
            border-radius: 0;
            outline: none;
            margin: 0 0 8px 0;
            padding: 0;
            -webkit-box-shadow: none;
            box-shadow: none;
            -webkit-box-sizing: content-box;
            box-sizing: content-box;
            font-size: 30px;
        }
    }
}
</style>
