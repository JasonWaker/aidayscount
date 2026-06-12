<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fcf8fb;
		color: #1b1b1d;
		-webkit-font-smoothing: antialiased;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	}

	.glass-card {
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(20px);
		border: 0.5px solid #e5e5e7;
	}

	.safe-bottom {
		padding-bottom: env(safe-area-inset-bottom);
	}
</style>
