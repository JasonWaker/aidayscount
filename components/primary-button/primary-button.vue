<template>
	<!-- PrimaryButton - 主要按钮组件 -->
	<view class="primary-button-wrapper">
		<view class="primary-button" @click="handleClick">
			<image class="btn-icon" src="/static/icons/add.svg" mode="aspectFit"></image>
			<text class="btn-text">{{ text }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'PrimaryButton',
		props: {
			text: {
				type: String,
				default: '按钮'
			}
		},
		methods: {
			handleClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.primary-button-wrapper {
		display: flex;
		justify-content: center;
	}

	.primary-button {
		display: flex;
		align-items: center;
		gap: 16rpx;
		padding: 24rpx 56rpx;
		background: linear-gradient(135deg, #ff8c00 0%, #ff6b00 100%);
		border-radius: 9999rpx;
		box-shadow: 0 20rpx 60rpx rgba(255, 140, 0, 0.3);
	}

	.btn-icon {
		width: 32rpx;
		height: 32rpx;
	}

	.btn-text {
		font-size: 28rpx;
		color: #ffffff;
		font-weight: 500;
	}
</style>
