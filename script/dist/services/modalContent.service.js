import { projects } from "../data/projects.data.js";
export function fillModalContent(dataID, moduleNumber) {
    if (dataID === null)
        throw new Error("No Data ID");
    if (dataID === null)
        throw new Error("No Module ID");
    const projectArray = projects[Number(moduleNumber)];
    let project = projectArray[+dataID];
    let projName = document.querySelector(".project-name");
    let projDesc = document.querySelector(".project-description");
    let projDownload = document.querySelector(".project-download");
    let projGoto = document.querySelector(".project-goto");
    let projGithub = document.querySelector(".project-github");
    let projImage = document.querySelector(".project-image");
    if (window.location.href)
        project.source.replace("/projects", "");
    projName.innerText = project.name;
    projDesc.innerText = project.shortDesc;
    projDownload.href = project.github + "/archive/refs/heads/main.zip";
    projGoto.href = project.source;
    projGithub.href = project.github;
    projImage.src = `./images/landing pages/${project.image}`;
}
