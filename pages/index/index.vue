<template>
	<view class="page-container">
		<!-- 顶部状态栏占位 -->
		<view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>

		<!-- 页面主内容区域 -->
		<view class="main-content">
			<!-- HeaderSection - 页面标题区域 -->
			<view class="page-header">
				<view class="header-left">
					<image class="page-logo" src="/static/icons/calendar.svg" mode="aspectFit"></image>
					<text class="page-title">AI倒数日</text>
				</view>
				<view class="header-right">
					<view class="add-btn" @click="handleAddClick">
						<image class="add-icon" src="/static/icons/add.svg" mode="aspectFit"></image>
					</view>
				</view>
			</view>

			<!-- 副标题区域 -->
			<view class="subtitle-section">
				<text class="subtitle-text">记录重要时刻，让等待更有意义</text>
			</view>

			<!-- PinnedHeroCard - 置顶春节卡片 -->
			<view class="pinned-hero-card">
				<image class="card-bg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRGRVlhBv3Uy8jUJLsBECVfxHJf6Bp3Hd4mYFPPYNwOIO7PI3WXq9B9Jz2NSoqSpt8GpKoPRipYg0WEhrGvHJHJ6PUJxXmzU-Ki3ROkTbem_BXPV8x-j1npfIYVZU45Lbi-vQXlrnCd0f9AceZN-fuPG75bxt--twOzG7V_eCATKA7nkQopXbrO0QArpF-iZaQIx8pzkRtH5SROqGC2_pAcRigBJA-iNNbXxZDaTqmNVBjuiMSZ0Ht9_4oWIAduJJBOlW2h_Q1tzs" mode="aspectFill"></image>
				<view class="card-overlay"></view>
				<view class="card-content">
					<view class="card-top">
						<view class="pin-badge">
							<text class="badge-text">置顶</text>
						</view>
						<image class="star-icon" src="/static/icons/star.svg" mode="aspectFit"></image>
					</view>
					<view class="card-bottom">
						<text class="card-title">2026年春节</text>
						<view class="countdown-container">
							<text class="countdown-number">{{ countdowns.spring }}</text>
							<text class="countdown-unit">天后</text>
						</view>
						<view class="date-row">
							<image class="date-icon" src="/static/icons/calendar.svg" mode="aspectFit"></image>
							<text class="date-text">2026年2月17日</text>
						</view>
					</view>
				</view>
			</view>

			<!-- RecentFestivalsSection - 近期重要节日列表 -->
			<view class="recent-festivals-section">
				<view class="section-header">
					<text class="section-title">近期重要节日</text>
					<text class="section-link" @click="handleViewAllClick">查看全部</text>
				</view>

				<view class="festival-list">
					<FestivalCard
						name="情人节"
						date="2026年2月14日"
						iconSrc="/static/icons/heart.svg"
						iconBgClass="pink-bg"
						:countdown="countdowns.valentine"
						:isHighlight="true"
						@click="handleFestivalClick"
					/>
					<FestivalCard
						name="母亲节"
						date="2026年5月10日"
						iconSrc="/static/icons/star.svg"
						iconBgClass="gray-bg"
						:countdown="countdowns.mother"
						@click="handleFestivalClick"
					/>
					<FestivalCard
						name="端午节"
						date="2026年6月19日"
						iconSrc="/static/icons/waves.svg"
						iconBgClass="gray-bg"
						:countdown="countdowns.dragon"
						@click="handleFestivalClick"
					/>
				</view>
			</view>
		</view>

		<!-- FAB - 底部悬浮添加按钮 -->
		<view class="fab-wrapper">
			<PrimaryButton text="添加我的倒数日" @click="handleFabClick" />
		</view>
	</view>
</template>

<script>
	import FestivalCard from '@/components/festival-card/festival-card.vue'
	import PrimaryButton from '@/components/primary-button/primary-button.vue'

	export default {
		name: 'IndexPage',
		components: {
			FestivalCard,
			PrimaryButton
		},
		data() {
			return {
				statusBarHeight: 44,
				countdowns: {
					spring: 0,
					valentine: 0,
					mother: 0,
					dragon: 0
				}
			}
		},
		onLoad() {
			this.initPage()
		},
		onShow() {
			this.updateCountdowns()
		},
		methods: {
			initPage() {
				// 获取状态栏高度
				const sysInfo = uni.getSystemInfoSync()
				this.statusBarHeight = sysInfo.statusBarHeight || 44
				// 更新倒计时
				this.updateCountdowns()
			},
			/**
			 * 计算距离目标日期的天数
			 * @param {string} targetDateStr - 目标日期字符串，格式：YYYY-MM-DD
			 * @returns {number} 距离天数
			 */
			getCountdown(targetDateStr) {
				const today = new Date()
				today.setHours(0, 0, 0, 0)
				const target = new Date(targetDateStr)
				target.setHours(0, 0, 0, 0)
				const diffTime = target - today
				const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
				return diffDays > 0 ? diffDays : 0
			},
			updateCountdowns() {
				this.countdowns.spring = this.getCountdown('2026-02-17')
				this.countdowns.valentine = this.getCountdown('2026-02-14')
				this.countdowns.mother = this.getCountdown('2026-05-10')
				this.countdowns.dragon = this.getCountdown('2026-06-19')
			},
			handleAddClick() {
				uni.showToast({ title: '添加', icon: 'none' })
			},
			handleViewAllClick() {
				uni.showToast({ title: '查看全部', icon: 'none' })
			},
			handleFestivalClick(name) {
				uni.showToast({ title: `点击${name}`, icon: 'none' })
			},
			handleFabClick() {
				uni.showToast({ title: '添加我的倒数日', icon: 'none' })
			}
		}
	}
</script>

<style lang="scss">
	/* 全局样式变量 */
	page {
		background: linear-gradient(to bottom, #fcf8fb, #ffffff);
	}

	.page-container {
		min-height: 100vh;
		background: linear-gradient(to bottom, #fcf8fb, #ffffff);
		font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	/* 顶部状态栏占位 */
	.status-bar {
		width: 100%;
		background-color: #fcf8fb;
	}

	/* 主内容区域 */
	.main-content {
		flex: 1;
		padding: 20rpx 40rpx;
		padding-bottom: 160rpx;
		box-sizing: border-box;
	}

	/* HeaderSection - 页面标题区域 */
	.page-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 24rpx;
	}

	.header-left {
		display: flex;
		align-items: center;
		gap: 16rpx;
	}

	.page-logo {
		width: 48rpx;
		height: 48rpx;
	}

	.page-title {
		font-size: 34rpx;
		font-weight: 600;
		color: #904d00;
	}

	.header-right {
		display: flex;
		align-items: center;
	}

	.add-btn {
		width: 56rpx;
		height: 56rpx;
		background: linear-gradient(135deg, #ff8c00 0%, #ff6b00 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.add-icon {
		width: 28rpx;
		height: 28rpx;
	}

	/* 副标题区域 */
	.subtitle-section {
		margin-bottom: 32rpx;
	}

	.subtitle-text {
		font-size: 28rpx;
		color: #897362;
		line-height: 1.5;
	}

	/* PinnedHeroCard - 置顶春节卡片 */
	.pinned-hero-card {
		position: relative;
		height: 400rpx;
		border-radius: 24rpx;
		overflow: hidden;
		margin-bottom: 32rpx;
		box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.08);
	}

	.card-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.card-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2), transparent);
	}

	.card-content {
		position: relative;
		z-index: 1;
		height: 100%;
		padding: 32rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.card-top {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}

	.pin-badge {
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(12px);
		padding: 8rpx 24rpx;
		border-radius: 9999rpx;
		border: 1px solid rgba(255, 255, 255, 0.3);
	}

	.badge-text {
		font-size: 22rpx;
		color: #ffffff;
		font-weight: 500;
	}

	.star-icon {
		width: 48rpx;
		height: 48rpx;
	}

	.card-bottom {
		display: flex;
		flex-direction: column;
		gap: 8rpx;
	}

	.card-title {
		font-size: 36rpx;
		color: #ffffff;
		font-weight: 600;
	}

	.countdown-container {
		display: flex;
		align-items: flex-end;
		gap: 12rpx;
	}

	.countdown-number {
		font-size: 100rpx;
		color: #ffffff;
		font-weight: 700;
		line-height: 1;
	}

	.countdown-unit {
		font-size: 24rpx;
		color: #ffffff;
		font-weight: 600;
		padding-bottom: 16rpx;
	}

	.date-row {
		display: flex;
		align-items: center;
		gap: 12rpx;
		opacity: 0.9;
		margin-top: 8rpx;
	}

	.date-icon {
		width: 28rpx;
		height: 28rpx;
	}

	.date-text {
		font-size: 24rpx;
		color: #ffffff;
		font-weight: 500;
	}

	/* RecentFestivalsSection - 近期重要节日列表 */
	.recent-festivals-section {
		margin-bottom: 32rpx;
	}

	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 24rpx;
	}

	.section-title {
		font-size: 30rpx;
		color: #1b1b1d;
		font-weight: 600;
	}

	.section-link {
		font-size: 26rpx;
		color: #904d00;
		font-weight: 500;
	}

	.festival-list {
		display: flex;
		flex-direction: column;
		gap: 16rpx;
	}

	/* FAB - 底部悬浮按钮 */
	.fab-wrapper {
		position: fixed;
		bottom: 140rpx;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		z-index: 90;
	}
</style>
