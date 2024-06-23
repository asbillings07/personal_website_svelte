<script>
	export let text;
	export let href;
</script>

<div class="button-primary">
	<a class="button-primary-link" {href}>
		{text}
	</a>
</div>

<style>
	.button-primary {
		padding: 15px;
		background: #77b0cd;
		border-radius: 45px;
		overflow: hidden;
		justify-content: center;
		align-items: center;
		display: inline-flex;
	}
	.button-primary-link {
		color: #fafafa;
		font-size: 14px;
		font-family: Inter;
		font-weight: 500;
		text-decoration: none;
		word-wrap: break-word;
	}

	@media (min-width: 975px) {
		.button-primary {
			width: 50%;
			padding: 25px 20px;
			background: #77b0cd;
			border-radius: 45px;
			overflow: hidden;
			justify-content: center;
			align-items: center;
			display: inline-flex;
		}
		.button-primary-link {
			color: #fafafa;
			font-size: 18px;
			font-family: Inter;
			font-weight: 500;
			word-wrap: break-word;
		}
	}
</style>
