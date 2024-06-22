<script lang="ts">
	import { getCldImageUrl } from 'svelte-cloudinary';
	const getUrl = (image: string) => {
		return getCldImageUrl({
			width: 960,
			height: 600,
			src: `personal_website/${image}`
		});
	};
</script>

<div class="container">
	<nav class="navbar navbar-expand-lg mb-4">
		<a class="navbar-brand" href="index.html">
			<div class="ab-logo" style={`background: url(${getUrl('logo')}) no-repeat;`}></div>
		</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="offcanvas"
			data-bs-target="#offcanvasNavbar"
			aria-controls="offcanvasNavbar"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div
			class="offcanvas offcanvas-end"
			tabindex="-1"
			id="offcanvasNavbar"
			aria-labelledby="offcanvasNavbarLabel"
		>
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" id="offcanvasNavbarLabel">Aaron Billings</h5>
				<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"
				></button>
			</div>
			<div class="offcanvas-body justify-content-end">
				<ul class="nav nav-icons justify-content-sm-start me-4">
					<li class="nav-item">
						<a class="nav-link ps-0 pe-0" href="https://github.com/asbillings07" target="_blank"
							><i class="bi bi-github"></i></a
						>
					</li>
					<li class="nav-item">
						<a
							class="nav-link pe-0"
							href="https://www.linkedin.com/in/aaron-billings-9b429610a/"
							target="_blank"><i class="bi bi-linkedin"></i></a
						>
					</li>
					<li class="nav-item">
						<a class="nav-link pe-0" href="https://abdevelops.medium.com/" target="_blank"
							><i class="bi bi-medium"></i></a
						>
					</li>
				</ul>
				<ul class="navbar-nav justify-content-end nav-underline">
					<li class="nav-item"><a class="nav-link" aria-current="page" href="/">HOME</a></li>
					<li class="nav-item"><a class="nav-link active" href="/projects">PROJECTS</a></li>
					<li class="nav-item"><a class="nav-link" href="/resume">EXPERIENCE</a></li>
					<li class="nav-item"><a class="nav-link" href="/contact">CONTACT</a></li>
				</ul>
			</div>
		</div>
	</nav>
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

	.navbar-brand {
		padding-top: var(--bs-navbar-brand-padding-y);
		padding-bottom: var(--bs-navbar-brand-padding-y);
		margin-right: var(--bs-navbar-brand-margin-end);
		font-size: var(--bs-navbar-brand-font-size);
		color: var(--bs-navbar-brand-color);
		text-decoration: none;
		white-space: nowrap;
	}

	.navbar {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);
	}

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

	body {
		background: url('img/bg.jpg') no-repeat fixed center;
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
	.ab-logo:hover {
		background: url('img/logo-flip.svg') no-repeat;
	}
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
		--bs-gutter-x: 1.5rem;
		--bs-gutter-y: 0;
		width: 100%;
		padding-right: calc(var(--bs-gutter-x) * 0.5);
		padding-left: calc(var(--bs-gutter-x) * 0.5);
		margin-right: auto;
		margin-left: auto;
	}

	.p-4 {
		padding: 1.5rem !important;
	}

	@media (min-width: 768px) {
		.container {
			max-width: 720px;
		}
	}

	/* Footer */
	footer {
		font-size: 12px;
		color: var(--mdgray);
		margin-top: 50px;
	}
</style>
