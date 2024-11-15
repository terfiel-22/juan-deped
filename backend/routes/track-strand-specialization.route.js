import {
  fetchSpecializations,
  fetchSpecializationsByStrandId,
  fetchStrands,
  fetchStrandsByTrackId,
  fetchTracks,
} from "../controllers/track-strand-specialization.controller.js";

export default (router) => {
  router.get("/tracks", fetchTracks);
  router.get("/strands", fetchStrands);
  router.get("/strands/track/:id", fetchStrandsByTrackId);
  router.get("/specializations", fetchSpecializations);
  router.get("/specializations/strand/:id", fetchSpecializationsByStrandId);
};
