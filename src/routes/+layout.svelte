<!-- Begin navbar -->
<nav class="navbar navbar-expand-lg mb-4">
	<a class="navbar-brand" href="index.html">
		<div class="ab-logo"></div>
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

<div class="container">
	<footer>
		<div class="row sticky-bottom">
			<div class="col d-flex justify-content-end">
				<p>
					&copy; <script>
						document.write(new Date().getFullYear());
					</script>
					by Aaron Billings. My <a href="https://akbgraphicdesign.com" target="_blank">wife</a> helped
					with the design a little.
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
	}
	/* Global */

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
		background: url('img/logo.svg') no-repeat;
		display: inline-block;
		transition: all 0.6s;
	}
	.ab-logo:hover {
		background: url('img/logo-flip.svg') no-repeat;
	}
	.nav-icons li a i {
		transistion: 800ms;
		color: var(--mdgray);
	}
	.nav-icons li a i:hover,
	.nav-icons li a i:active,
	.nav-icons li a i:focus {
		color: var(--blue);
		transistion: 800ms;
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
	/* Projects */
	.card,
	.card-img-top {
		border-radius: 0;
	}
	.card-title,
	.card-text {
		color: var(--dkgray);
	}
	.card-title a {
		color: var(--dkgray);
		transition: all ease-in-out 300ms;
	}
	.card-title a:active,
	.card-title a:hover,
	.card-title a:focus {
		color: var(--blue);
		transition: all ease-in-out 300ms;
	}
	.card img {
		filter: grayscale(1);
		transition: 400ms;
	}
	.card img:hover {
		filter: grayscale(0);
		transition: 400ms;
	}
	@media (min-width: 768px) and (max-width: 991px) {
		.card-body {
			min-height: 200px;
		}
	}
	@media (min-width: 992px) {
		.card-body {
			min-height: 165px;
		}
	}
	.list-group-flush .list-group-item {
		padding: 5px 0px !important;
	}
	.breadcrumb .breadcrumb-item {
		text-transform: uppercase;
		color: var(--mdgray);
		font-size: 14px;
	}
	.breadcrumb-item + .breadcrumb-item::before {
		color: var(--mdgray);
	}
	.proj-img {
		border: solid 1px #dee2e6;
	}
	/* Resume */
	.nav-pills {
		--bs-nav-pills-border-radius: 0;
		--bs-nav-pills-link-active-color: var(--dkgray);
		--bs-nav-pills-link-active-bg: #fafafa;
		text-transform: uppercase;
		font-family: var(--heading);
		text-align: left;
	}
	.nav-pills .nav-link {
		padding: 15px 20px;
	}
	.nav-pills .nav-link:focus,
	.nav-pills .nav-link:hover {
		color: var(--blue);
	}
	.list-group-flush .list-group-item {
		background-color: transparent;
		font-family: 'Space Mono', monospace;
		text-transform: uppercase;
		border-bottom: 0;
		padding: 5px 16px;
	}
	.work-icon {
		transition: all 400ms;
	}
	.work-icon:hover {
		transform: translate(3px, -3px);
		transition: all 400ms;
	}
	/* Contact page */
	.form-control {
		border-radius: 0;
	}
	.form-control:focus {
		border-color: var(--blue);
	}
	.form-floating > .form-control-plaintext ~ label,
	.form-floating > .form-control:focus ~ label,
	.form-floating > .form-control:not(:placeholder-shown) ~ label,
	.form-floating > .form-select ~ label {
		text-transform: uppercase;
		color: var(--mdgray);
	}
	/* Footer */
	footer {
		font-size: 12px;
		color: var(--mdgray);
		margin-top: 50px;
	}
</style>
