import { initSubjects, initTracks } from "../controllers/init.controller.js";

export default (router) => {
  router.post("/init/tracks", initTracks);
  router.post("/init/subjects", initSubjects);
};
