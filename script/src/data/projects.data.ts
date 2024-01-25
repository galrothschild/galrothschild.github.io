import { IProject } from "../models/IProject.model.js";

let project1: IProject = {
    image: "landingPage1.png",
    name: "Vacation!",
    shortDesc: `Here you can see a demo landing page for a vacation signup form. It has a good example of a background image with an overlaying form.`,
    source: "./projects/vacationLandingPage",
    technologies: ["html", "css"],
    github: "https://github.com/galrothschild/vacationLandingPage"
};

let project2: IProject = {
    image: "landingPage2.png",
    name: "Coffee Shop",
    shortDesc: "This is a demo landing page for a coffee shop, you can pick up your favorite cup of joe!",
    source: "./projects/coffeeLandingPage",
    technologies: ["html", "css"],
    github: "https://github.com/galrothschild/coffeeLandingPage"
};

let project3: IProject = {
    image: "landingPage3.png",
    name: "Here and Now",
    shortDesc: "This is a demo for a gradient background with an overlaying form.",
    source: "./projects/hereNowLandingPage",
    technologies: ["html", "css"],
    github: "https://github.com/galrothschild/hereNowLandingPage"
};

let project4: IProject = {
    image: "landingPage4.png",
    name: "Forward!",
    shortDesc: "This is a landing page for marketing, it is done using Bootstrap for most elements to showcase my understanding of it.",
    source: "./projects/forwardLandingPage",
    technologies: ["html", "css", "bootstrap"],
    github: "https://github.com/galrothschild/forwardLandingPage"
};

let project5: IProject = {
    image: "landingPage5.png",
    name: "Move Forward",
    shortDesc: "This is a showcase of some sass, and a good example for a background size changing with the screen size.",
    source: "./projects/moveForwardLandingPage",
    technologies: ["html", "css", "sass"],
    github: "https://github.com/galrothschild/moveForwardLandingPage"
};

let project6: IProject = {
    image: "landingPage6.png",
    name: "Forward!",
    shortDesc: "This is a landing page for marketing, it is done using Bootstrap for most elements to showcase my understanding of it.",
    source: "./projects/chaserLandingPage",
    technologies: ["html", "css", "sass"],
    github: "https://github.com/galrothschild/chaserLandingPage"
};

export const projectsModuleOne: IProject[] = [project1, project2, project3, project4, project5, project6];

// let project7: IProject = {

// };