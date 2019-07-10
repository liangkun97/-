<template>
    <div class="personInfo">
        <div class="topbar">
            <div class="bgBox">
                <router-link to="/homeMember">
                    <span class="goback mui-icon mui-icon-arrowleft"></span>
                </router-link>
                <div class="photo">
                    <span>梁坤</span>
                    <div class="shoot">
                        <span class="mui-icon iconfont icon-xiangji"></span>
                    </div>
                </div>
                <div class="userInfo">
                    <h2 class="userName">梁坤</h2>
                </div>
            </div>
        </div>
        <div class="container">
            <h2 class="compony">上海汉得信息技术股份有限公司</h2>
            <div class="infoList">
                <ul>
                    <li class="infoItem">
                        <span class="itemName">工号</span>
                        <span class="userInfo">25152</span>
                    </li>
                    <li class="infoItem">             
                        <span class="itemName">部门</span>
                        <span class="userInfo">顾问发展中心</span>
                    </li>
                    <li class="infoItem">             
                        <span class="itemName">职位</span>
                        <span class="userInfo">实习技术顾问</span>
                    </li>
                    <li class="infoItem">             
                        <span class="itemName">性别</span>
                        <span class="userInfo">男</span>
                    </li>
                    <li class="infoItem">             
                        <span class="itemName">状态</span>
                        <span class="userInfo"></span>
                    </li>
                    <li class="infoItem">             
                        <span class="itemName">邮箱</span>
                        <span class="userInfo">KUN.LIANG01@HAND-CHINA.COM</span>
                    </li>
                    <li class="infoItem">             
                        <span class="itemName">手机</span>
                        <span class="userInfo">18392539542</span>
                    </li>
                    <li class="infoItem">             
                        <span class="itemName">微信</span>
                        <span class="userInfo"></span>
                    </li>
                    <li class="infoItem">             
                        <span class="itemName">备用联系方式</span>
                        <span class="userInfo"></span>
                    </li>
                    <li class="infoItem">             
                        <span class="itemName">Base地</span>
                        <span class="userInfo"></span>
                    </li>
                    <li class="infoItem">             
                        <span class="itemName">手机</span>
                        <span class="userInfo"></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.personInfo {
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
            height: 150px;
            background: #0098FF;
            text-align: center;
            padding-top: 30px;
            .goback {
                position: absolute;
                left: 5px;
                top: 10px;
                color: #fff;
            }
            .photo {
                height: 60px;
                width: 60px;
                border-radius: 50%;
                border: 2px solid #fff;
                box-sizing: border-box;
                margin: 0px auto;
                line-height: 60px;
                color: #fff;
                background: #ccc;
            }
            .shoot {
                position: absolute;
                top: 50px;
                left: 200px;
                span {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #333;
                    font-size: 10px;
                    color: #fff;
                    text-align: center;
                    line-height: 20px;
                }
            }
            .Arrow {
                position: absolute;
                color: #fff;
                top: 50px;
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
        margin-top: 150px;
        .compony {
            width: 100%;
            height: 35px;
            background: #fff;
            font-size: 12px;
            color: #333;
            line-height: 35px;
            padding-left: 15px;
        }
        .infoList {
            ul {
                margin: 0;
                padding: 0;
                border-top: 0.5px solid #eee;
                border-bottom: 0.5px solid #eee;
                .infoItem {
                    width: 100%;
                    height: 35px;
                    line-height: 35px;
                    display: flex;
                    list-style: none;
                    padding-left: 15px;
                    border-bottom: 0.5px solid #eee;
                    background: #fff;
                    .itemName {
                        flex: 6;
                        text-align: left;
                        font-size: 12px;
                    }
                    .userInfo {
                        flex: 6;
                        text-align: right;
                        font-size: 12px;
                        padding-right: 15px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
        }
    }
}
</style>



