import {
  initAdminAccount,
  initPersonnels,
  initSubjects,
  initTrackStrandSpecialization,
} from "../controllers/init.controller.js";

export default (router) => {
  router.post(
    "/init/tracks-strands-specializations",
    initTrackStrandSpecialization
  );
  router.post("/init/subjects", initSubjects);
  router.post("/init/personnels", initPersonnels);
  router.post("/init/admin", initAdminAccount);
};
