<script lang="ts">
	import Nav from '../components/Nav.svelte';
	import { onMount } from 'svelte';
	import { getCldImageUrl } from 'svelte-cloudinary';
	const getUrl = (image: string) => {
		return getCldImageUrl({
			width: 960,
			height: 600,
			src: `personal_website/${image}`
		});
	};
	onMount(() => {
		const bg_image = getUrl('bg_image');
		const body = document.querySelector('body');
		if (body) {
			body.style.background = `url(${bg_image}) no-repeat fixed center`;
		}
	});
</script>

<div class="container">
	<Nav />
	<!-- /navbar -->

	<slot></slot>
</div>

<div class="container">
	<footer>
		<div class="row sticky-bottom">
			<div class="col d-flex justify-content-end">
				<p>
					&copy;
					{new Date().getFullYear()} by Aaron Billings. My
					<a href="https://akbgraphicdesign.com" target="_blank">wife</a> helped with the design a little.
				</p>
			</div>
		</div>
	</footer>
</div>

<style>
	@charset "UTF-8";
	/* CSS Document */
	:root {
		--dkgray: #313638;
		--ltgray: #d7d7d7;
		--mdgray: #a7a7a7;
		--blue: #77b0cd;
		--dkblue: #3b80a3;
		--heading: 'Space Mono', monospace;
		--paragraph: 'Inter', sans-serif;
		-bs-navbar-padding-x: 0;
		--bs-navbar-padding-y: 0.5rem;
		--bs-navbar-color: rgba(var(--bs-emphasis-color-rgb), 0.65);
		--bs-navbar-hover-color: rgba(var(--bs-emphasis-color-rgb), 0.8);
		--bs-navbar-disabled-color: rgba(var(--bs-emphasis-color-rgb), 0.3);
		--bs-navbar-active-color: rgba(var(--bs-emphasis-color-rgb), 1);
		--bs-navbar-brand-padding-y: 0.3125rem;
		--bs-navbar-brand-margin-end: 1rem;
		--bs-navbar-brand-font-size: 1.25rem;
		--bs-navbar-brand-color: rgba(var(--bs-emphasis-color-rgb), 1);
		--bs-navbar-brand-hover-color: rgba(var(--bs-emphasis-color-rgb), 1);
		--bs-navbar-nav-link-padding-x: 0.5rem;
		--bs-navbar-toggler-padding-y: 0.25rem;
		--bs-navbar-toggler-padding-x: 0.75rem;
		--bs-navbar-toggler-font-size: 1.25rem;
		--bs-navbar-toggler-icon-bg: url('data:image/svg + xml,%3csvgxmlns=http://www.w3.org/2000/svgviewBox=0 0 30 30%3e%3cpathstroke=rgba%2833, 37, 41, 0.75%29stroke-linecap=roundstroke-miterlimit=10stroke-width=2d=M4 7h22M4 15h22M4 23h22/%3e%3c/svg%3e');
		--bs-navbar-toggler-border-color: rgba(var(--bs-emphasis-color-rgb), 0.15);
		--bs-navbar-toggler-border-radius: var(--bs-border-radius);
		--bs-navbar-toggler-focus-width: 0.25rem;
		--bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;
		--bs-blue: #0d6efd;
		--bs-indigo: #6610f2;
		--bs-purple: #6f42c1;
		--bs-pink: #d63384;
		--bs-red: #dc3545;
		--bs-orange: #fd7e14;
		--bs-yellow: #ffc107;
		--bs-green: #198754;
		--bs-teal: #20c997;
		--bs-cyan: #0dcaf0;
		--bs-black: #000;
		--bs-white: #fff;
		--bs-gray: #6c757d;
		--bs-gray-dark: #343a40;
		--bs-gray-100: #f8f9fa;
		--bs-gray-200: #e9ecef;
		--bs-gray-300: #dee2e6;
		--bs-gray-400: #ced4da;
		--bs-gray-500: #adb5bd;
		--bs-gray-600: #6c757d;
		--bs-gray-700: #495057;
		--bs-gray-800: #343a40;
		--bs-gray-900: #212529;
		--bs-primary: #0d6efd;
		--bs-secondary: #6c757d;
		--bs-success: #198754;
		--bs-info: #0dcaf0;
		--bs-warning: #ffc107;
		--bs-danger: #dc3545;
		--bs-light: #f8f9fa;
		--bs-dark: #212529;
		--bs-primary-rgb: 13, 110, 253;
		--bs-secondary-rgb: 108, 117, 125;
		--bs-success-rgb: 25, 135, 84;
		--bs-info-rgb: 13, 202, 240;
		--bs-warning-rgb: 255, 193, 7;
		--bs-danger-rgb: 220, 53, 69;
		--bs-light-rgb: 248, 249, 250;
		--bs-dark-rgb: 33, 37, 41;
		--bs-primary-text-emphasis: #052c65;
		--bs-secondary-text-emphasis: #2b2f32;
		--bs-success-text-emphasis: #0a3622;
		--bs-info-text-emphasis: #055160;
		--bs-warning-text-emphasis: #664d03;
		--bs-danger-text-emphasis: #58151c;
		--bs-light-text-emphasis: #495057;
		--bs-dark-text-emphasis: #495057;
		--bs-primary-bg-subtle: #cfe2ff;
		--bs-secondary-bg-subtle: #e2e3e5;
		--bs-success-bg-subtle: #d1e7dd;
	}
	/* Global */

	.mb-4 {
		margin-bottom: 1.5rem;
	}

	.navbar-toggler {
		padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
		font-size: var(--bs-navbar-toggler-font-size);
		line-height: 1;
		color: var(--bs-navbar-color);
		background-color: transparent;
		border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
		border-radius: var(--bs-navbar-toggler-border-radius);
		transition: var(--bs-navbar-toggler-transition);
	}

	:global(body) {
		background: url() no-repeat fixed center;
		background-size: cover;
		color: var(--dkgray);
		font-size: 16px;
	}
	/* Typography */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: var(--heading);
		font-weight: 400;
		font-style: normal;
		text-transform: uppercase;
		color: var(--dkgray);
		line-height: 1.5;
	}
	p {
		font-family: var(--paragraph);
		color: var(--dkgray);
	}
	h1 {
		font-size: 48px;
	}
	@media (max-width: 480px) {
		h1 {
			font-size: 40px;
		}
	}
	a {
		color: var(--blue);
		text-decoration: none;
		transition: all ease-in-out 300ms;
	}
	a:active,
	a:hover,
	a:focus {
		color: var(--dkblue);
		transition: all ease-in-out 300ms;
	}
	.bi {
		font-size: 1.5rem;
	}
	.bg-dark {
		background-color: var(--blue) !important;
	}
	.highlight {
		background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, rgba(119, 176, 205, 0.6) 50%);
	}
	.border-bottom {
		border-bottom: solid 1px #dee2e6;
	}
	/* Buttons */
	.btn {
		text-transform: uppercase;
		--bs-btn-padding-x: 1.5rem;
		font-size: 16px;
	}
	.btn-primary {
		--bs-btn-color: #fafafa;
		--bs-btn-bg: #77b0cd;
		--bs-btn-border-color: #77b0cd;
		--bs-btn-hover-color: #fafafa;
		--bs-btn-hover-bg: #3b80a3;
		--bs-btn-hover-border-color: #3b80a3;
		--bs-btn-focus-shadow-rgb: 49, 132, 253;
		--bs-btn-active-color: #fafafa;
		--bs-btn-active-bg: #3b80a3;
		--bs-btn-active-border-color: #3b80a3;
		--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
		--bs-btn-disabled-color: #ddd;
		--bs-btn-disabled-bg: #b5b5b5;
		--bs-btn-disabled-border-color: #b5b5b5;
		--bs-btn-border-radius: 50px;
		--bs-btn-font-family: 'Inter', sans-serif;
		--bs-btn-text-transform: uppercase;
	}
	.btn-outline-primary {
		--bs-btn-color: #77b0cd;
		--bs-btn-border-color: #77b0cd;
		--bs-btn-border-width: 2px;
		--bs-btn-hover-color: #3b80a3;
		--bs-btn-hover-bg: transparent;
		--bs-btn-hover-border-color: #3b80a3;
		--bs-btn-focus-shadow-rgb: 13, 110, 253;
		--bs-btn-active-color: #3b80a3;
		--bs-btn-active-bg: transparent;
		--bs-btn-active-border-color: #3b80a3;
		--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
		--bs-btn-disabled-color: #ddd;
		--bs-btn-disabled-bg: transparent;
		--bs-btn-disabled-border-color: #ddd;
		--bs-gradient: none;
		--bs-btn-border-radius: 50px;
		--bs-btn-text-transform: uppercase;
	}
	.btn-lg {
		--bs-btn-padding-x: 2.5rem;
	}
	/* Nav */
	.ab-logo {
		height: 60px;
		width: 150px;
		display: inline-block;
		transition: all 0.6s;
	}
	/* .ab-logo:hover {
		background: url('img/logo-flip.svg') no-repeat;
	} */
	.nav-icons li a i {
		transition: 800ms;
		color: var(--mdgray);
	}
	.nav-icons li a i:hover,
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

	.container {
		margin: auto;
	}

	.p-4 {
		padding: 1.5rem !important;
	}

	/* @media (min-width: 768px) {
		.container {
			max-width: 720px;
		}
	} */

	/* Footer */
	footer {
		font-size: 12px;
		color: var(--mdgray);
		margin-top: 50px;
	}
</style>
