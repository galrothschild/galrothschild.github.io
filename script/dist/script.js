import { projects } from "./data/projects.data.js";
import insertCards from "./services/card.service.js";
import { setModalClosures, setModalOpenButtons } from "./services/modal.service.js";
insertCards(projects[0], "module-0", 0);
insertCards(projects[1], "module-1", 1);
setModalClosures();
setModalOpenButtons();
