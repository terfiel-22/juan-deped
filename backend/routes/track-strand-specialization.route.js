import {
  fetchSpecializationById,
  fetchSpecializations,
  fetchSpecializationsByStrandId,
  fetchStrandById,
  fetchStrands,
  fetchStrandsByTrackId,
  fetchTrackById,
  fetchTracks,
} from "../controllers/track-strand-specialization.controller.js";

export default (router) => {
  router.get("/tracks", fetchTracks);
  router.get("/track/:id", fetchTrackById);
  router.get("/strands", fetchStrands);
  router.get("/strand/:id", fetchStrandById);
  router.get("/strands/track/:id", fetchStrandsByTrackId);
  router.get("/specializations", fetchSpecializations);
  router.get("/specialization/:id", fetchSpecializationById);
  router.get("/specializations/strand/:id", fetchSpecializationsByStrandId);
};
