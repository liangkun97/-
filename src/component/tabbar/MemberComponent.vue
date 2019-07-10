<template>
    <div class="MemberCom">
        <div class="topbar">
            <div class="bgBox">
                <router-link to="/personInfo">
                    <div class="photo">
                        梁坤
                    </div>
                    <span class="Arrow componyArrow mui-icon mui-icon-arrowright"></span>
                    <div class="userInfo">
                        <h2 class="userName">梁坤</h2>
                        <span class="userJob">实习技术顾问</span>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="container">
            <div class="myBox">
                <a class="myBoxItem" href="javascript:void(0)">
                    <p class="myBoxInfo">
                        <span class="myBoxIcon mui-icon iconfont icon-xinxiang"></span>
                        <span class="myBoxTitle">我的信箱</span>
                        <span class="myBoxArrow mui-icon mui-icon-arrowright"></span>
                    </p>
                </a>
                <a class="myBoxItem" href="javascript:void(0)">
                    <p class="myBoxInfo">
                        <span class="myBoxIcon mui-icon iconfont icon-zuji"></span>
                        <span class="myBoxTitle">我的足迹</span>
                        <span class="myBoxArrow mui-icon mui-icon-arrowright"></span>
                    </p>
                </a>
                <a class="myBoxItem" href="javascript:void(0)">
                    <p class="myBoxInfo">
                        <span class="myBoxIcon mui-icon iconfont icon-zhengshu"></span>
                        <span class="myBoxTitle">我的证书</span>
                        <span class="myBoxArrow mui-icon mui-icon-arrowright"></span>
                    </p>
                </a>
                <a class="myBoxItem" href="javascript:void(0)">
                    <p class="myBoxInfo">
                        <span class="myBoxIcon mui-icon iconfont icon-huasheng"></span>
                        <span class="myBoxTitle">智能小花</span>
                        <span class="myBoxArrow mui-icon mui-icon-arrowright"></span>
                    </p>
                </a>
                <a class="myBoxItem" href="javascript:void(0)">
                    <p class="myBoxInfo">
                        <span class="myBoxIcon mui-icon iconfont icon-taolun"></span>
                        <span class="myBoxTitle">我要吐槽</span>
                        <span class="myBoxArrow mui-icon mui-icon-arrowright"></span>
                    </p>
                </a>
            </div>
            <div class="myBox">
                <a class="myBoxItem" href="javascript:void(0)">
                    <p class="myBoxInfo">
                        <span class="myBoxIcon mui-icon iconfont icon-ziyuan"></span>
                        <span class="myBoxTitle">我的钱包</span>
                        <span class="myBoxArrow mui-icon mui-icon-arrowright"></span>
                    </p>
                </a>
                <a class="myBoxItem" href="javascript:void(0)">
                    <p class="myBoxInfo">
                        <span class="myBoxIcon mui-icon iconfont icon-shoucang"></span>
                        <span class="myBoxTitle">我的收藏</span>
                        <span class="myBoxArrow mui-icon mui-icon-arrowright"></span>
                    </p>
                </a>
            </div>
            <div class="myBox">
                <a class="myBoxItem" href="javascript:void(0)">
                    <p class="myBoxInfo">
                        <span class="myBoxIcon mui-icon iconfont icon-shezhi"></span>
                        <span class="myBoxTitle">设置</span>
                        <span class="myBoxArrow mui-icon mui-icon-arrowright"></span>
                    </p>
                </a>
                <a class="myBoxItem" href="javascript:void(0)">
                    <p class="myBoxInfo">
                        <span class="myBoxIcon mui-icon iconfont icon-guanyu"></span>
                        <span class="myBoxTitle">
                            关于
                            <b class="versions">当前版本V4.5.1</b>    
                        </span>
                        <span class="myBoxArrow mui-icon mui-icon-arrowright"></span>
                    </p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .MemberCom {
        height: 100%;
        width: 100%;
        .topbar {
            width: 100%;
            height: 170px;
            position: fixed;
            top: 0;
            left: 0;
            .bgBox {
                position: relative;
                width: 100%;
                height: 170px;
                background: url(../../images/datouerzi.jpg) no-repeat;
                background-size: cover;
                text-align: center;
                padding-top: 30px;
                .photo {
                    height: 75px;
                    width: 75px;
                    border-radius: 50%;
                    border: 2px solid #fff;
                    box-sizing: border-box;
                    margin: 0px auto;
                    line-height: 75px;
                    color: #fff;
                    background: #ccc;
                }
                .Arrow {
                    position: absolute;
                    color: #fff;
                    top: 55px;
                    right: 120px;
                }
            }
            .userInfo {
                color: #fff;
                .userName {
                    font-size: 14px;
                    line-height: 25px;
                }
                .userJob {
                    font-size: 13px;
                }
            }
        }
        .container {
            position: relative;
            width: 100%;
            margin-top: 170px;
            .myBox {
                width: 100%;
                background: #fff;
                margin: 5px 0 10px 0;
                border-top: 0.4px solid #eee;
                border-bottom: 0.4px solid #eee;
                .myBoxItem {
                    width: 100%;
                    height: 35px;
                    box-sizing: border-box;
                    .myBoxInfo {
                        position: relative;
                        display: flex;
                        margin: 0;
                        color: #000;
                        font-size: 12px;
                        line-height: 35px;
                        vertical-align: middle;
                        border-bottom: 0.4px solid #eee;
                        .myBoxIcon {
                            flex: 2;
                            text-align: center;
                            line-height: 35px;
                            vertical-align: middle;
                            font-size: 18px;
                        }
                        .myBoxTitle {
                            flex: 10;
                            padding-right: 20px;
                            .versions {
                                float: right;
                                padding-right: 10px;
                                color: #777;
                            }
                        }
                        .myBoxArrow {
                            position: absolute;
                            flex: 3;
                            right: 10px;
                            font-size: 12px;
                            color: rgba(0, 0, 0, .7);
                            line-height: 35px;
                            text-align: center;
                        }
                    }
                }
                .myBoxItem:last-child {
                    .myBoxInfo {
                        border-bottom: 0;
                    }
                }
            }
        }
    }
</style>