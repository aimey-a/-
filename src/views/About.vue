<template>
    <div class="About">
        <div class="top">
            <a class="top_a">公司简介</a>
        </div>
        <div class="cen">
            <div class="cen_top">
                <div class="cen_top_url">
                    <el-image
                        class="cen_url_img"
                        :src="back3"
                        fit="fit"
                    ></el-image>
                </div>
                <div class="cen_url_text">
                    <p
                        v-for="(e,i) in aboutInfo"
                        :key="i"                        
                    >
                        {{e}}                        
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import back3 from "../assets/img/a1.jpg";
export default {
    name: "About",
    data() {
        return {
            back3,
            aboutInfo: [
                "南昌汉代海昏侯国遗址博物馆（南昌市文物考古研究院）为南昌汉代海昏侯国遗址管理局下属正县级全额拨款事业单位，在业务上接受省文化、文物主管部门和南昌市文化广电新闻出版局的指导。",
                "博物馆的主要职责是：",
                "（一）宣传贯彻执行《中华人民共和国文物保护法》等考古发掘方面的法律法规。",
                "（二）负责编制遗址的考古发掘规划和年度工作计划；建立健全相关管理规章制度，依法履行文物保护职责。",
                "（三）负责博物馆的日常管理、运营、宣传工作；负责博物馆文物储藏、修缮、保护、研究工作；负责博物馆基本陈列展览、临时陈列展览工作；负责博物馆陈列展览设计工作。",
                "（四）负责南昌汉代海昏侯国遗址及南昌区域内的考古调查勘探与发掘、资料整理及出土文物的临时保管和移交工作；负责考古资料的保管、研究工作；负责考古 现场、标本库房、文物运输、移交过程中的安全保护工作；负责研究汉代海昏侯国、海昏侯、汉代政治经济社会文化等工作；负责与国内外文物考古科研机构开展交 流与合作；负责研究开发文物修复、文物储藏新技术、新方法。",
                "（五）承担南昌市范围内其他考古发掘工作。",
            ],
        };
    },
    props: [],
    components: {},
    created() {},
    mounted() {},
    methods: {},
};
</script>

<style lang="scss" scoped>
.About {
    background-color: #fbfbfb;
    padding-top: 100px;
    margin: 0 10%;
}
.top {
    width: 100%;
    text-align: center;
    font-family: "方正舒体";
    font-size: 50px;
    padding: 20px;
    margin: 20px;
    .top_a {
        border-style: dotted solid dashed solid;
        border-color: #e9eae2;
        border-width: 10px;
        padding: 10px;
    }
}
.cen {
    padding: 20px 100px;
    .cen_top {
        display: flex;
        margin-bottom: 50px;
    }
    .cen_url_img {
        width: 650px;
        height: 550px;
    }
    .cen_url_text {
        text-indent: 2em;
        margin-left: 30px;
        line-height: 35px;
    }
}
</style>
