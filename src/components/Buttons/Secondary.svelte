<script>
	export let text;
	export let href;
</script>

<div class="button-secondary">
	<a class="button-secondary-link" {href}>
		{text}
	</a>
</div>

<style>
	.button-secondary {
		padding: 15px;
		border-radius: 45px;
		overflow: hidden;
		border: 3px #77b0cd solid;
		justify-content: center;
		align-items: center;
		display: inline-flex;
	}

	.button-secondary-link {
		color: #77b0cd;
		font-size: 14px;
		font-family: Inter;
		font-weight: 500;
		text-decoration: none;
		word-wrap: break-word;
	}

	@media (min-width: 975px) {
		.button-secondary {
			width: 50%;
			padding: 25px 20px;
			border-radius: 45px;
			overflow: hidden;
			border: 3px #77b0cd solid;
			justify-content: center;
			align-items: center;
			display: inline-flex;
		}

		.button-secondary-link {
			color: #77b0cd;
			font-size: 18px;
			font-family: Inter;
			font-weight: 500;
			word-wrap: break-word;
		}
	}
</style>
