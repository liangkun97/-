<template>
    <div class="BookCom">
        <div class="topbar">
            <h2>通讯录</h2>
        </div>
        <div class="container">
            <div class="searchBox">
                <input type="search" class="search" placeholder="搜索姓名/工号/电话/邮箱">
                <span class="mui-icon mui-icon-search"></span>
            </div>
            <div class="channelList">
                <a class="channelItem" href="javascript:void(0)">
                    <p class="channelIcon">
                        <span class="mui-icon iconfont icon-qunliao"></span>
                    </p>
                    <p class="channelInfo">
                        我的群聊
                       <span class="channelArrow mui-icon mui-icon-arrowright"></span>
                    </p>
                </a>
                <a class="channelItem" href="javascript:void(0)">
                    <p class="channelIcon">
                        <span class="mui-icon iconfont icon-qiyewenhua"></span>
                    </p>
                    <p class="channelInfo">
                        企业频道
                       <span class="channelArrow mui-icon mui-icon-arrowright"></span>
                    </p>
                </a>
            </div>
            <div class="company">
                <div class="componyName">
                    <a class="componyLogo" href="javascript:void(0)" v-on:click="openComList()">
                        <p class="componyIcon">
                            <img src="../../images/handLogo.jpg" alt="">
                        </p>
                        <p class="componyInfo">
                            上海汉得信息技术股份有限公司
                            <span ref="componyArrow" class="componyArrow mui-icon mui-icon-arrowright"></span>
                        </p>
                    </a>
                </div>
                <div class="componyList" ref="componyList" style="display: none;">
                    <a class="componyItem" href="javascript:void(0)">
                        <p class="componyIcon">
                            <span class="mui-icon iconfont icon-zuzhijiagou"></span>
                        </p>
                        <p class="componyInfo">
                            公司架构
                            <span class="componyArrow mui-icon mui-icon-arrowright"></span>
                        </p>
                    </a>
                    <a class="componyItem" href="javascript:void(0)">
                        <p class="componyIcon">
                            <span class="mui-icon iconfont icon-fangxiang"></span>
                        </p>
                        <p class="componyInfo">
                            汉得-汉得信息-技术发展中心-技术部-实习技术顾问
                            <span class="componyArrow mui-icon mui-icon-arrowright"></span>
                        </p>
                    </a>
                </div>
            </div>
            <div class="colleague">
                <h2 class="title" v-on:click="openColleagueList()">
                    常用联系人
                    <span ref="colleagueArrow" class="colleagueArrow mui-icon mui-icon-arrowright"></span>
                </h2>
                <div class="colleagueList" ref="colleagueList" style="display: none;">
                    <a class="colleagueItem" href="javascript:void(0)">
                        <p class="colleagueIcon">
                            <span class="person-pic">梁坤</span>
                        </p>
                        <span class="colleagueInfo">梁坤</span>
                    </a>
                    <a class="colleagueItem" href="javascript:void(0)">
                        <p class="colleagueIcon">
                            <span class="person-pic">小五</span>
                        </p>
                        <span class="colleagueInfo">王小五</span>
                    </a>
                    <a class="colleagueItem" href="javascript:void(0)">
                        <p class="colleagueIcon">
                            <span class="person-pic">嘿嘿</span>
                        </p>
                        <span class="colleagueInfo">嘿嘿嘿</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Transform } from 'stream';
export default {
    data() {
        return {

        }
    },
    methods: {
        openComList() {
            if (this.$refs.componyList.style.display == "block") {
                this.$refs.componyList.style.display = "none"
                this.$refs.componyArrow.className = "componyArrow mui-icon mui-icon-arrowright"
            } else {
                this.$refs.componyList.style.display = "block"
                this.$refs.componyArrow.className = "componyArrow mui-icon mui-icon-arrowdown"
            }
        },
        openColleagueList() {
            if (this.$refs.colleagueList.style.display == "block") {
                this.$refs.colleagueList.style.display = "none"
                this.$refs.colleagueArrow.className = "colleagueArrow mui-icon mui-icon-arrowright"
            } else {
                this.$refs.colleagueList.style.display = "block"
                this.$refs.colleagueArrow.className = "colleagueArrow mui-icon mui-icon-arrowdown"
            }
        }
    }
}
</script>

<style lang="scss">
.BookCom {
    height: 100%;
    width: 100%;
    p {
        margin: 0;
    }
    .topbar {
            position: fixed;
            top: 0;
            left: 0;
            padding: 15px 10px 5px;
            box-sizing: border-box;
            background: #fff;
            height: 50px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            z-index: 9999;
            border-bottom: 0.5px solid #aaa;
        h2 {
            width: 100%;
            text-align: center;
            font-size: 18px;
            font-weight: 500;
        }
    }
    .container {
        width: 100%;
        margin: 50px 0 50px 0;
        .searchBox {
            position: relative;
            width: 100%;
            height: 35px;
            padding: 5px 10px;
            .search {
                width: 100%;
                height: 30px;
                padding-left: 30px;
                text-align: left;
                font-size: 12px;
                background: #fff;
                margin: 0;
                border: 0.3px solid rgba(0, 0, 0, .3);
            }
            span {
                position: absolute;
                top: 13px;
                left: 20px;
                font-size: 15px;
            }

        }
        .channelList {
            width: 100%;
            background: #fff;
            margin: 5px 0 10px 0;
            border-top: 0.4px solid #eee;
            border-bottom: 0.4px solid #eee;
            .channelItem {
                width: 100%;
                height: 35px;
                display: flex;
                .channelIcon {
                    flex: 2;
                    text-align: center;
                    line-height: 35px;
                    vertical-align: middle;
                    span {
                        width: 25px;
                        height: 25px;
                        border-radius: 50%;
                        background: #eee;
                        line-height: 25px;
                        color: #1F8CEB;
                        font-size: 16px;
                        vertical-align: middle;
                    }
                }
                .channelInfo {
                    position: relative;
                    margin: 0;
                    flex: 13;
                    color: #000;
                    font-size: 12px;
                    line-height: 35px;
                    border-bottom: 0.4px solid #eee;
                    .channelArrow {
                        position: absolute;
                        right: 10px;
                        font-size: 12px;
                        color: rgba(0, 0, 0, .7);
                        line-height: 35px;
                    }
                }
            }
            .channelItem:last-child {
                .channelInfo {
                    border-bottom: 0;
                }
            }
        }
        .company {
            width: 100%;
            background: #fff;
            width: 100%;
            border-top: 0.4px solid #eee;
            border-bottom: 0.4px solid #eee;
            .componyName {
                height: 35px;
                line-height: 35px;
                .componyLogo {
                    height: 35px;
                    line-height: 35px;
                    border-bottom: 0.4px solid #eee;
                    display: flex;
                    .componyIcon {
                        flex: 2;
                        text-align: center;
                        line-height: 35px;
                        vertical-align: middle;
                        img {
                            width: 30px;
                            height: 30px;
                            vertical-align: middle;
                        }
                    }
                    .componyInfo {
                        position: relative;
                        flex: 13;
                        font-size: 12px;
                        color: #000;
                        .componyArrow {
                            position: absolute;
                            right: 10px;
                            font-size: 12px;
                            color: rgba(0, 0, 0, .7);
                            line-height: 35px;
                        }

                    }
                }
            }
            .componyList {
                .componyItem {
                    display: flex;
                    width: 100%;
                    height: 35px;
                    line-height: 35px;
                    vertical-align: middle;
                    .componyIcon {
                        flex: 2;
                        text-align: center;
                        line-height: 35px;
                        vertical-align: middle;
                        span {
                            width: 25px;
                            height: 25px;
                            line-height: 25px;
                            color: rgba(0, 0, 0, .5);
                            font-size: 16px;
                            vertical-align: middle;
                        }
                    }
                    .componyInfo {
                        position: relative;
                        flex: 13;
                        font-size: 12px;
                        color: #000;
                        border-bottom: 0.4px solid #eee;
                        .componyArrow {
                            position: absolute;
                            right: 10px;
                            font-size: 12px;
                            color: rgba(0, 0, 0, .7);
                            line-height: 35px;
                        }
                    }
                }
                .componyItem:last-child {
                    .componyInfo {
                        border-bottom: 0;
                    }
                }
            }
        }
        .colleague {
            width: 100%;
            background: #fff;
            border-top: 0.4px solid #eee;
            border-bottom: 0.4px solid #eee;
            margin: 10px 0 10px 0;
            .title {
                height: 30px;
                width: 100%;
                position: relative;
                line-height: 30px;
                font-size: 12px;
                font-weight: 500;
                color: rgba(0, 0, 0, .7);
                margin: 0;
                padding-left: 30px;
                border-bottom: 0.4px solid #eee;
                .colleagueArrow {
                    position: absolute;
                    right: 10px;
                    font-size: 12px;
                    color: rgba(0, 0, 0, .7);
                    line-height: 35px;
                }
            }
            .title::before {
                content: '';
                position: absolute;
                width: 3px;
                height: 15px;
                background: #1F8FCF;
                border-radius: 5px;
                top: 6px;
                left: 15px;
            }
            .colleagueList {
                width: 100%;
                background: #fff;
                .colleagueItem {
                    width: 100%;
                    height: 35px;
                    display: flex;
                    .colleagueIcon {
                        flex: 2;
                        text-align: center;
                        line-height: 35px;
                        vertical-align: middle;
                        .person-pic {
                            display: inline-block;
                            height: 25px;
                            width: 25px;
                            border-radius: 50%;
                            background: rgba(0, 0, 0, .3);
                            line-height: 25px;
                            color: #fff;
                            font-size: 8px;
                            font-weight: 200;
                            vertical-align: middle;
                            // transform: scale(0.8);
                        }
                    }
                    .colleagueInfo {
                        position: relative;
                        flex: 13;
                        font-size: 13px;
                        color: #000;
                        line-height: 35px;
                        border-bottom: 0.4px solid #eee;
                    }
                }
                .colleagueItem:last-child {
                    .colleagueInfo {
                        border-bottom: 0;
                    }
                }
            }
        }
    }
}
</style>