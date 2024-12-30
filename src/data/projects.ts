import Angular from "../components/icons/tags/Angular.astro";
import Appwrite from "../components/icons/tags/Appwrite.astro";
import AstroLogo from "../components/icons/tags/Astro.astro";
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
        icon: AstroLogo
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
        description: "PROJECTS.ORDODESC",
        url: "",
        githubLink: "https://github.com/javiermartins/ordo",
        image: "https://via.placeholder.com/300",
        tags: [TAGS.ANGULAR, TAGS.TAIGAUI, TAGS.FIREBASE, TAGS.TAILWIND],
    },
    {
        title: "Cutlynk",
        description: "PROJECTS.CUTLYNKDESC",
        url: "https://cutlynk.vercel.app/",
        githubLink: "https://github.com/javiermartins/cutlynk",
        image: "img/projects/cutlynk.webp",
        tags: [TAGS.ANGULAR, TAGS.TAIGAUI, TAGS.APPWRITE, TAGS.TAILWIND],
    },
    {
        title: "Tastime",
        description: "PROJECTS.TASTTIMEDESC",
        url: "https://play.google.com/store/apps/details?id=com.amstroop.tastime",
        image: "img/projects/tastime.webp",
        tags: [TAGS.ANGULAR, TAGS.IONIC],
    },
];


export default PROJECTS;
