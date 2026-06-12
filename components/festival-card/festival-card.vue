<template>
	<!-- FestivalCard - 节日卡片组件 -->
	<view class="festival-card" @click="handleClick">
		<view class="card-inner">
			<view class="card-left">
				<view class="icon-wrapper" :class="iconBgClass">
					<image class="festival-icon" :src="iconSrc" mode="aspectFit"></image>
				</view>
				<view class="festival-info">
					<text class="festival-name">{{ name }}</text>
					<text class="festival-date">{{ date }}</text>
				</view>
			</view>
			<view class="card-right">
				<text class="countdown-value" :class="{ highlight: isHighlight }">{{ countdown }}</text>
				<image class="day-icon" src="/static/icons/day.svg" mode="aspectFit"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'FestivalCard',
		props: {
			name: {
				type: String,
				default: ''
			},
			date: {
				type: String,
				default: ''
			},
			iconSrc: {
				type: String,
				default: ''
			},
			iconBgClass: {
				type: String,
				default: 'gray-bg'
			},
			countdown: {
				type: [Number, String],
				default: 0
			},
			isHighlight: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			handleClick() {
				this.$emit('click', this.name)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.festival-card {
		background: rgba(255, 255, 255, 0.85);
		backdrop-filter: blur(20px);
		border: 1px solid rgba(229, 229, 231, 0.5);
		border-radius: 20rpx;
		overflow: hidden;
	}

	.card-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 28rpx;
	}

	.card-left {
		display: flex;
		align-items: center;
		gap: 20rpx;
	}

	.icon-wrapper {
		width: 64rpx;
		height: 64rpx;
		border-radius: 14rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.pink-bg {
		background-color: #ffdcc3;
	}

	.gray-bg {
		background-color: #e4e2e4;
	}

	.festival-icon {
		width: 36rpx;
		height: 36rpx;
	}

	.festival-info {
		display: flex;
		flex-direction: column;
		gap: 4rpx;
	}

	.festival-name {
		font-size: 28rpx;
		color: #1b1b1d;
		font-weight: 600;
	}

	.festival-date {
		font-size: 24rpx;
		color: #897362;
		font-weight: 500;
	}

	.card-right {
		display: flex;
		align-items: center;
		gap: 8rpx;
	}

	.countdown-value {
		font-size: 36rpx;
		color: #897362;
		font-weight: 600;
	}

	.countdown-value.highlight {
		color: #4da9a0;
	}

	.day-icon {
		width: 24rpx;
		height: 24rpx;
	}
</style>
