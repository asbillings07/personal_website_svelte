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

<div class="col-md-5 order-5 order-md-1">
	{#each data.project.image_names as image}
		<figure>
			<img src={getUrl(image)} alt={data.project.project_name} class="img-fluid proj-img" />
		</figure>
	{/each}
	<!-- <figure>
		<img
			src="img/course-share_01-lg.jpeg"
			alt="CourseShare project screenshot"
			class="img-fluid proj-img"
		/>
	</figure>
	<figure>
		<img src="img/course-share_02.jpeg" alt="CourseShare page" class="img-fluid proj-img" />
	</figure>
	<figure>
		<img
			src="img/course-share_03.jpeg"
			alt="CourseShare course detail page"
			class="img-fluid proj-img"
		/>
	</figure> -->
</div>
<div class="col-md-7 order-1 order-md-5">
	<h2 class="mb-4"><span class="highlight">{data.project.project_name}</span></h2>
	<a class="btn btn-primary btn-lg me-4" href={data.project.github_link} role="button">GITHUB</a>
	<a class="btn btn-outline-primary btn-lg" href={data.project.live_link} role="button"
		>LIVE PROJECT</a
	>
	<p class="mt-5">{data.project.description}</p>
	<ul class="list-group list-group-flush mt-5">
		<!-- <li class="list-group-item"><i class="bi bi-arrow-right blue"></i> HTML</li>
        <li class="list-group-item"><i class="bi bi-arrow-right blue"></i> CSS</li>
        <li class="list-group-item"><i class="bi bi-arrow-right blue"></i> JavaScript</li>
        <li class="list-group-item"><i class="bi bi-arrow-right blue"></i> SQL</li>
          <li class="list-group-item"><i class="bi bi-arrow-right blue"></i> Node</li>
          <li class="list-group-item"><i class="bi bi-arrow-right blue"></i> Sequelize ORM</li>
          <li class="list-group-item"><i class="bi bi-arrow-right blue"></i> Rest API</li>
          <li class="list-group-item"><i class="bi bi-arrow-right blue"></i> Express</li>
          <li class="list-group-item"><i class="bi bi-arrow-right blue"></i> React</li>
          <li class="list-group-item"><i class="bi bi-arrow-right blue"></i> Bcrypt</li>
          <li class="list-group-item"><i class="bi bi-arrow-right blue"></i> Basic-auth</li>
          <li class="list-group-item"><i class="bi bi-arrow-right blue"></i> Fetch API</li>
          <li class="list-group-item"><i class="bi bi-arrow-right blue"></i> Axios</li> -->
		{#each data.project.technologies as technology}
			<li class="list-group-item"><i class="bi bi-arrow-right blue"></i>{technology}</li>
		{/each}
	</ul>
</div>
