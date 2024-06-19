import { error } from '@sveltejs/kit';
import { projects } from '../../../store/data.js';

export function load({ params }) {
	const project = projects.find((project) => project.slug === params.slug);

	if (!project) throw error(404);

	return {
		project
	};
}