import {
  initPersonnels,
  initSubjects,
  initTracks,
} from "../controllers/init.controller.js";

export default (router) => {
  router.post("/init/tracks", initTracks);
  router.post("/init/subjects", initSubjects);
  router.post("/init/personnels", initPersonnels);
};
