import {
  fetchSpecializations,
  fetchStrands,
  fetchTracks,
} from "../controllers/track-strand-specialization.controller.js";

export default (router) => {
  router.get("/tracks", fetchTracks);
  router.get("/strands", fetchStrands);
  router.get("/specializations", fetchSpecializations);
};
