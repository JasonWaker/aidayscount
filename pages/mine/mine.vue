<template>
	<view class="container">
		<view class="page-content">
			<text class="page-title">我的</text>
			<text class="page-desc">暂无内容</text>
		</view>
	</view>
</template>

<script>
export default {
	name: 'MinePage'
}
</script>

<style lang="scss">
.container {
	width: 100%;
	min-height: 100vh;
	background: linear-gradient(180deg, #fcf8fb 0%, #f5eef4 100%);
	display: flex;
	justify-content: center;
	align-items: center;
}

.page-content {
	text-align: center;
}

.page-title {
	font-size: 48rpx;
	font-weight: 600;
	color: #333;
	display: block;
	margin-bottom: 20rpx;
}

.page-desc {
	font-size: 28rpx;
	color: #999;
}
</style>
