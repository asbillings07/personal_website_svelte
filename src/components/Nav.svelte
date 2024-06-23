<script lang="ts">
	import { getCldImageUrl } from 'svelte-cloudinary';
	import GithubIcon from './Github.svelte';
	import Logo from './Logo.svelte';
	import LinkedInIcon from './LinkedIn.svelte';
	import MediumIcon from './Medium.svelte';
	import CollapsibleMenu from './CollapsibleMenu.svelte';
	const getUrl = (image: string) => {
		return getCldImageUrl({
			width: 960,
			height: 600,
			src: `personal_website/${image}`
		});
	};
	const menus = ['Work', 'Resume', 'Contact'];
</script>

<nav class="navbar">
	<a class="navbar-brand" href="/">
		<div class="ab-logo">
			<Logo />
		</div>
	</a>

	<div class="menu-items">
		<ul class="nav nav-icons">
			<li class="nav-item">
				<a class="nav-link ps-0 pe-0" href="https://github.com/asbillings07" target="_blank"
					><GithubIcon /></a
				>
			</li>
			<li class="nav-item">
				<a
					class="nav-link pe-0"
					href="https://www.linkedin.com/in/aaron-billings-9b429610a/"
					target="_blank"><LinkedInIcon /></a
				>
			</li>
			<li class="nav-item">
				<a class="nav-link pe-0" href="https://abdevelops.medium.com/" target="_blank"
					><MediumIcon /></a
				>
			</li>
		</ul>
		<CollapsibleMenu>
			<div class="menu-container">
				{#each menus as menu}
					<div class="sub-menu-container">
						<a href={`/${menu.toLowerCase() === 'work' ? 'projects' : menu.toLowerCase()}`}>
							<div class="menu-link">{menu.toUpperCase()}</div>
						</a>

						<div class="menu-border"></div>
					</div>
				{/each}
			</div>
		</CollapsibleMenu>
	</div>
</nav>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		padding: 15px;
	}
	.navbar-brand {
		padding-top: 25px;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	.menu-items {
		display: flex;
	}

	.menu-container {
		padding: 25px;
		gap: 35px;
		display: inline-flex;
	}
	.sub-menu-container {
		width: 54px;
		align-self: stretch;
		position: relative;
	}
	.menu-link {
		left: 0px;
		top: 0px;
		position: absolute;
		color: #333333;
		font-size: 18px;
		font-family: Inter;
		font-weight: 400;
		word-wrap: break-word;
	}
	.menu-border {
		width: 51px;
		height: 0px;
		left: 2px;
		top: 34px;
		position: absolute;
		border: 2px #77b0cd solid;
	}
	/* Nav */
	.ab-logo {
		height: 60px;
		width: 150px;
		display: inline-block;
		transition: all 0.6s;
	}
	.ab-logo:hover {
		background: url('img/logo-flip.svg') no-repeat;
	}

	.nav {
		display: flex;
		align-items: center;
	}
	.nav-icons li a i {
		transition: 800ms;
		color: var(--mdgray);
	}
	.nav-icons li a svg:hover,
	.nav-icons li a i:active,
	.nav-icons li a i:focus {
		color: var(--blue);
		transition: 800ms;
	}
	.nav-link {
		color: var(--dkgray);
	}
	.nav-underline .nav-link:focus,
	.nav-underline .nav-link:hover {
		border-bottom-color: var(--blue);
		color: var(--blue);
	}
	.nav-underline .nav-link.active,
	.nav-underline .show > .nav-link {
		border-bottom-color: var(--blue);
	}
	.nav-underline {
		--bs-nav-underline-gap: 1rem;
		--bs-nav-underline-border-width: 0.25rem;
	}
	.navbar-expand-lg .navbar-nav .nav-link {
		padding-left: 0;
		padding-right: 0;
	}
</style>
