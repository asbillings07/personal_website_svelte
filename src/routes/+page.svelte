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

<div class="row d-flex align-items-lg-center gx-5 row-gap-4">
	<div class="col-12 col-lg-6 text-center">
		<img src={getUrl('profile_image')} alt="Aaron Billings" class="img-fluid mx-auto" />
	</div>
	<div class="col-12 col-lg-6">
		<h1>
			HI, I’M AARON BILLINGS AND I’M A <span class="highlight">FULL-STACK SOFTWARE ENGINEER.</span>
		</h1>
		<p class="my-5">
			I’m a senior full-stack engineer based in Atlanta, Georgia with over 5 years of experience. I
			specialize in web apps. I have a passion for problem-solving and creating immersive user
			experiences. I’m open to new and interesting opportunities—check out my work and reach out to
			me.
		</p>
		<div class="d-grid gap-2 col-8 col-md-12 mx-auto d-md-flex">
			<a class="btn btn-primary btn-lg me-md-4" href="projects.html" role="button">SEE MY WORK</a>
			<a class="btn btn-outline-primary btn-lg" href="contact.html" role="button">CONTACT ME</a>
		</div>
	</div>
</div>
