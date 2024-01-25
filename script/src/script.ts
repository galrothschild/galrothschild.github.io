import { projectsModuleOne } from "./data/projects.data.js";
import insertCards from "./services/card.service.js";
import { setModalClosures, setModalOpens } from "./services/modal.service.js";

insertCards(projectsModuleOne, "gallery-cards");
setModalClosures();
setModalOpens();