
<template>
    <div class="MessageCom">
        <div class="topbar">
            <div class="searchBox">
                <input type="search" class="search" placeholder="搜索姓名/工号/电话/邮箱">
                <span class="mui-icon mui-icon-search"></span>
            </div>
            <div class="addOther">
                <span class="mui-icon mui-icon-locked"></span>
            </div>
            <div class="pwRoom">
                <span class="mui-icon mui-icon-plusempty"></span>
            </div>
        </div>
        <div class="container">
            <div class="messageList">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell mui-media">
                        <a href="javascript:;">
                            <img class="mui-media-object mui-pull-left" src="../../images/logo.jpg">
                            <div class="mui-media-body">
                                海马汇
                                <div class="timeView">
                                    <span>昨天 11:47</span>
                                </div>
                                <p class="mui-ellipsis">移动开发程序员效率提升秘籍</p>
                            </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media">
                        <a href="javascript:;">
                            <img class="mui-media-object mui-pull-left" src="../../images/logo.jpg">
                            <div class="mui-media-body">
                                木屋
                                <div class="timeView">
                                    <span>星期三 11:47</span>
                                </div>
                                <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                            </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media">
                        <a href="javascript:;">
                            <img class="mui-media-object mui-pull-left" src="../../images/logo.jpg">
                            <div class="mui-media-body">
                                CBD
                                <div class="timeView">
                                    <span>星期八 25:30</span>
                                </div>
                                <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
    .MessageCom {
        height: 100%;
        width: 100%;
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
            .searchBox {
                position: relative;
                flex: 10;
                .search {
                    height: 25px;
                    padding-left: 30px;
                    text-align: left;
                    font-size: 12px;
                    background: #eee;
                    margin: 0;
                }
                span {
                    position: absolute;
                    top: 5px;
                    left: 10px;
                    font-size: 15px;
                }
            }
            .pwRoom, .addOther {
                flex: 1;
                text-align: right;
                span {
                    color: #1F8CEB;
                    font-size: 30px;
                    line-height: 24px;
                }
            }
            .addOther {
                span {
                    font-size: 18px;
                }
            }

        }
        .container {
            width: 100%;
            margin: 50px 0 50px 0;
            .messageList {
                .mui-media-body {
                    .mui-ellipsis {
                        padding-right: 50px;
                    }
                }
                .timeView {
                    float: right;
                    span {
                        float: right;
                        font-size: 10px;
                        color: #777;
                    }
                }
            }
        }
    }
</style>




