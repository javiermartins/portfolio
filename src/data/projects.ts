import Angular from "../components/icons/tags/Angular.astro";
import Appwrite from "../components/icons/tags/Appwrite.astro";
import Astro from "../components/icons/tags/Astro.astro";
import Firebase from "../components/icons/tags/Firebase.astro";
import Ionic from "../components/icons/tags/Ionic.astro";
import TaigaUI from "../components/icons/tags/TaigaUI.astro";
import Tailwind from "../components/icons/tags/Tailwind.astro";
import type { Project } from "../types/project";


const TAGS: any = {
    ANGULAR: {
        name: "Angular",
        icon: Angular
    },
    APPWRITE: {
        name: "Appwrite",
        icon: Appwrite
    },
    ASTRO: {
        name: "Astro",
        icon: Astro
    },
    FIREBASE: {
        name: "Firebase",
        icon: Firebase
    },
    IONIC: {
        name: "Ionic",
        icon: Ionic
    },
    TAIGAUI: {
        name: "Taiga UI",
        icon: TaigaUI
    },
    TAILWIND: {
        name: "Tailwind",
        icon: Tailwind
    },
};

const PROJECTS: Project[] = [
    {
        title: "Ordo",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur libero in ex euismod vestibulum.",
        url: "",
        githubLink: "https://github.com/javiermartins/ordo",
        image: "https://via.placeholder.com/300",
        tags: [TAGS.ANGULAR, TAGS.TAIGAUI, TAGS.FIREBASE, TAGS.TAILWIND],
    },
    {
        title: "Cutlynk",
        description:
            "Cutlynk es un acortador de URL rápido y seguro que convierte enlaces largos en cortos de forma sencilla, con una interfaz amigable y protección de datos.",
        url: "https://cutlynk.vercel.app/",
        githubLink: "https://github.com/javiermartins/cutlynk",
        image: "img/projects/cutlynk.webp",
        tags: [TAGS.ANGULAR, TAGS.TAIGAUI, TAGS.APPWRITE, TAGS.TAILWIND],
    },
    {
        title: "Tastime",
        description:
            "Tastime es una app educativa que integra horario y tareas en una sola herramienta, con personalización, exportación y control total de tu organización académica.",
        url: "https://play.google.com/store/apps/details?id=com.amstroop.tastime",
        image: "https://via.placeholder.com/300",
        tags: [TAGS.ANGULAR, TAGS.IONIC],
    },
];


export default PROJECTS;
