<script lang="ts">
	export let data;
	import { getCldImageUrl } from 'svelte-cloudinary';
	const getUrl = (image: string) => {
		return getCldImageUrl({
			width: 960,
			height: 600,
			src: `personal_website/${image}`
		});
	};
</script>

<div class="row my-5 justify-content-center">
	<div class="col-md-12 col-lg-8 text-center">
		<h1><span class="highlight px-3">MY PROJECTS</span></h1>
		<p class="my-4">
			Check out my personal and professional projects. <a href="/contact">Contact me</a> for more information
			or collaboration opportunities.
		</p>
		<a class="btn btn-outline-primary btn-lg me-4" href="/contact" role="button">CONTACT ME</a>
	</div>
</div>

{#each data.projects as { title, description, image, slug }}
	<div class="col-12 col-md-4">
		<div class="card">
			<a href={`/${slug}`}><img src={getUrl(image)} class="card-img-top" alt={title} /></a>
			<div class="card-body">
				<h5 class="card-title"><a href={`/${slug}`}>{title}</a></h5>
				<p class="card-text">{description}</p>
			</div>
		</div>
	</div>
{/each}

<!-- Begin card row -->
<!-- <div class="row gy-4">
	<div class="col-12 col-md-4">
		<div class="card">
			<a href="cssgetter.html"
				><img src="img/getter_01.png" class="card-img-top" alt="CSS Getter" /></a
			>
			<div class="card-body">
				<h5 class="card-title"><a href="cssgetter.html">CSS Getter</a></h5>
				<p class="card-text">A Chrome extension that “gets” CSS data from web pages.</p>
			</div>
		</div>
	</div>
	<div class="col-12 col-md-4">
		<div class="card">
			<a href="phrasegame.html"
				><img src="img/phrase-game_01.jpeg" class="card-img-top" alt="Jedi Hunter Phrase Game" /></a
			>
			<div class="card-body">
				<h5 class="card-title"><a href="phrasegame.html">Jedi Hunter Phrase Game</a></h5>
				<p class="card-text">A browser-based word guessing game built with JavaScript.</p>
			</div>
		</div>
	</div>
	<div class="col-12 col-md-4">
		<div class="card">
			<a href="empdirectory.html"
				><img
					src="img/employee-directory_01.jpeg"
					class="card-img-top"
					alt="Employee Directory"
				/></a
			>
			<div class="card-body">
				<h5 class="card-title"><a href="empdirectory.html">Employee Directory </a></h5>
				<p class="card-text">
					An employee directory app created by communicating with a third-party API.
				</p>
			</div>
		</div>
	</div>
	<div class="col-12 col-md-4">
		<div class="card">
			<a href="courseshare.html"
				><img src="img/course-share_01.jpeg" class="card-img-top" alt="CourseShare" /></a
			>
			<div class="card-body">
				<h5 class="card-title"><a href="courseshare.html">CourseShare</a></h5>
				<p class="card-text">
					A full stack app that allows users to view, create, update and delete courses.
				</p>
			</div>
		</div>
	</div>
	<div class="col-12 col-md-4">
		<div class="card">
			<a href="recommendit.html">
				<img src="img/recommendit_03 2.jpg" class="card-img-top" alt="RecommendIt!" /></a
			>
			<div class="card-body">
				<h5 class="card-title"><a href="recommendit.html">RecommendIt!</a></h5>
				<p class="card-text">
					An app that allows you to find and share cool places to your friends.
				</p>
			</div>
		</div>
	</div>
	<div class="col-12 col-md-4">
		<div class="card">
			<a href="#"
				><img src="img/scoreboard_01.jpeg" class="card-img-top" alt="React Scoreboard" /></a
			>
			<div class="card-body">
				<h5 class="card-title"><a href="#">React Scoreboard</a></h5>
				<p class="card-text">
					A scoreboard for tracking points in a game of your choice. Also includes a timer.
				</p>
			</div>
		</div>
	</div>
	<div class="col-12 col-md-4">
		<div class="card">
			<a href="#"><img src="img/gallery_01.jpeg" class="card-img-top" alt="React Gallery App" /></a>
			<div class="card-body">
				<h5 class="card-title"><a href="#">React Gallery App</a></h5>
				<p class="card-text">A Flickr-type photo gallery app built with the Flickr API.</p>
			</div>
		</div>
	</div>
	<div class="col-12 col-md-4">
		<div class="card">
			<a href="#"><img src="img/pagination_01.jpeg" class="card-img-top" alt="Pagination App" /></a>
			<div class="card-body">
				<h5 class="card-title"><a href="#">Pagination App</a></h5>
				<p class="card-text">
					An app that displays 10 students on one page and provides navigation to jump to a list of
					more items.
				</p>
			</div>
		</div>
	</div>
</div> -->

<style>
		/* Projects */
	/* .card,
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
</style>
