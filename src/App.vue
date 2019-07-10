<template>
    <div class="app-container">

        <router-view></router-view>

        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-hmh" to="/homeMessage">
				<span class="mui-icon mui-icon-chat"></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-tab-item-hmh" to="/homeApp">
				<span class="mui-icon iconfont icon-yingyong"></span>
				<span class="mui-tab-label">应用</span>
			</router-link>
			<router-link class="mui-tab-item-hmh" to="/homeBook">
				<span class="mui-icon iconfont icon-tongxunlu"></span>
				<span class="mui-tab-label">通讯录</span>
			</router-link>
			<router-link class="mui-tab-item-hmh" to="/homeMember">
				<span class="mui-icon iconfont icon-wode"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
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
<style lang="scss" scoped>
    .app-container {
        width: 100%;
        height: 100%;
    }
    .mui-bar-tab .mui-tab-item-hmh.mui-active{
        color: #1F8CEB;
    }
    .mui-bar .mui-icon {
        font-size: 22px;
    }
    .mui-bar-tab .mui-tab-item-hmh .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .mui-tab-item-hmh {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .mui-tab-item-hmh .mui-icon~.mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
