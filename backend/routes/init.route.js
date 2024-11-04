import { initTracks } from "../controllers/init.controller.js";

export default (router) => {
  router.post("/init/tracks", initTracks);
};
