import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface Project {
    title: string
    description: string,
    url: string,
    githubLink: string,
    image: string,
    tags: any[]
}

export interface Tag {
    name: string,
    class: string,
    icon: AstroComponentFactory;
}