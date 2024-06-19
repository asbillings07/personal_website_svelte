import { projects } from "../../store/data";

export function load() {
    return {
        projects: projects.map(project => ({
            title: project.project_name,
            description: project.description,
            slug: project.slug,
            image: project.image_names[0],
        }))
    }
}