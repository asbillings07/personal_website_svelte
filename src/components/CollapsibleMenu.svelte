<script>
	import HamburgerMenu from './HamburgerMenu.svelte';
	import { onMount } from 'svelte';
	let viewportWidth = 0;

	// Function to update viewport width
	const updateViewportWidth = () => {
		viewportWidth = window.innerWidth;
	};

	// Initialize viewport width on component mount
	onMount(() => {
		updateViewportWidth(); // Set initial viewport width
		window.addEventListener('resize', updateViewportWidth); // Update on resize
		return () => {
			window.removeEventListener('resize', updateViewportWidth); // Cleanup
		};
	});

	let expanded = false;
</script>

<div class="collapsible">
	{#if viewportWidth < 768}
		<h3>
			<button popovertarget="my-popover" popovertargetaction="toggle" aria-expanded={expanded}>
				<HamburgerMenu />
			</button>
		</h3>

		<div popover="auto" id="my-popover" class="contents">
			<slot></slot>
		</div>
	{:else}
		<slot></slot>
	{/if}
</div>

<style>
	.collapsible {
		display: flex;
		justify-content: flex-end;
	}

	#my-popover {
		bottom: 12em;
		left: 35em;
		border: none;
	}

	@media (max-width: 768px) {
		:global(.menu-container) {
			flex-direction: column !important;
			padding: 50px !important;
			gap: 60px !important;
		}
	}

	h3 {
		padding-left: 25px;
	}

	button {
		background-color: var(--background, #fff);
		color: var(--gray-darkest, #282828);
		display: flex;
		justify-content: space-between;
		width: 100%;
		border: none;
		margin: 0;
		padding: 1em 0.5em;
	}

	button[aria-expanded='true'] {
		border-bottom: 1px solid var(--gray-light, #eee);
	}
</style>
