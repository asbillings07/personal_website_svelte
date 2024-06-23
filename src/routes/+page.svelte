<script lang="ts">
	import PrimaryButton from '../components/Buttons/Primary.svelte';
	import SecondaryButton from '../components/Buttons/Secondary.svelte';
	import { getCldImageUrl } from 'svelte-cloudinary';
	const getUrl = (image: string) => {
		return getCldImageUrl({
			width: 960,
			height: 600,
			src: `personal_website/${image}`
		});
	};
</script>

<div class="profile-container">
	<div class="col-12 col-lg-6 text-center">
		<img src={getUrl('profile_image')} alt="Aaron Billings" class="img-fluid mx-auto" />
	</div>
	<div class="text-container">
		<div class="sub-text-container">
			<div class="highlight-1"></div>
			<div class="highlight-2"></div>
			<div class="text">HI, I’M AARON BILLINGS AND I’M A FULL-STACK SOFTWARE ENGINEER.</div>
		</div>
		<p class="bio-text">
			I’m a senior full-stack engineer based in Atlanta, Georgia with over 5 years of experience. I
			specialize in web apps. I have a passion for problem-solving and creating immersive user
			experiences. I’m open to new and interesting opportunities—check out my work and reach out to
			me.
		</p>
		<div class="button-container">
			<PrimaryButton href="/projects" text="SEE MY WORK" />
			<SecondaryButton href="/contact" text="CONTACT ME" />
		</div>
	</div>
</div>

<style>
	:root {
		--blue: #77b0cd;
		--white: #ffffff;
		--light-blue: rgba(119, 176, 205, 0.8);
	}
	.button-container {
		display: flex;
		justify-content: space-evenly;
		gap: 30px;
	}
	.profile-container {
		display: flex;
	}
	.text-container {
		padding: 25px;
	}
	.sub-text-container {
		width: 100%;
		height: 45%;
		position: relative;
	}
	.highlight-1 {
		width: 305.66px;
		height: 30.37px;
		left: 0px;
		top: 127.44px;
		position: absolute;
		opacity: 0.8;
		background: var(--light-blue);
	}
	.highlight-2 {
		width: 530px;
		height: 30.37px;
		left: 0px;
		top: 184.9px;
		position: absolute;
		opacity: 0.8;
		background: var(--light-blue);
	}
	.text {
		width: 522.16px;
		height: 278.23px;
		left: 7.84px;
		top: -0px;
		position: absolute;
		color: #333333;
		font-size: 47px;
		font-family: Space Mono;
		font-weight: 400;
		word-wrap: break-word;
	}
	.profile-container img {
		width: 535px;
		height: 594px;
		flex-shrink: 0;
	}

	.bio-text {
		color: #333333;
		font-size: 18px;
		font-family: Inter;
		font-weight: 400;
		line-height: 27px;
		word-wrap: break-word;
	}
	/*
	.profile-container h1 {
		font-size: 2.5rem;
	}

	.profile-container p {
		font-size: 1.25rem;
	}

	.profile-container .highlight {
		color: var(--blue);
	}

	.profile-container .btn {
		border-radius: 0;
	}

	.profile-container .btn-primary {
		background-color: var(--blue);
		border-color: var(--blue);
	}

	.profile-container .btn-primary:hover {
		background-color: var(--blue);
		border-color: var(--blue);
	}

	.profile-container .btn-outline-primary {
		color: var(--blue);
		border-color: var(--blue);
	}

	.profile-container .btn-outline-primary:hover {
		color: var(--white);
		background-color: var(--blue);
	} */
</style>
