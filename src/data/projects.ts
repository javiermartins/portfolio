import GitHub from "../components/icons/GitHub.astro";
import type { Project, Tag } from "../types/project";


const TAGS: any = {
    ASTRO: {
        name: "Astro",
        class: "bg-[#2c2052] text-white",
        icon: GitHub
    },
    TAILWIND: {
        name: "Tailwind CSS",
        class: "bg-[#003159] text-white",
        icon: GitHub
    },
};

const PROJECTS: Project[] = [
    {
        title: "Project",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur libero in ex euismod vestibulum.",
        url: "",
        githubLink: "https://github.com/javiermartins",
        image: "https://via.placeholder.com/300",
        tags: [TAGS.ASTRO, TAGS.TAILWIND],
    },
    {
        title: "Project",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur libero in ex euismod vestibulum.",
        url: "",
        githubLink: "https://github.com/javiermartins",
        image: "https://via.placeholder.com/300",
        tags: [TAGS.ASTRO, TAGS.TAILWIND],
    },
    {
        title: "Project",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur libero in ex euismod vestibulum.",
        url: "",
        githubLink: "https://github.com/javiermartins",
        image: "https://via.placeholder.com/300",
        tags: [TAGS.ASTRO, TAGS.TAILWIND],
    },
];


export default PROJECTS;
