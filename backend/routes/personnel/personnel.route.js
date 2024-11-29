import {
  createPersonnel,
  deletePersonnel,
  editPersonnel,
  fetchPersonnels,
  loginPersonnel,
} from "../../controllers/personnel/personnel.controller.js";
import { isAdmin, isPersonnel } from "../../middlewares/roleHandler.js";

export default (router) => {
  router.post("/auth/personnel/login", loginPersonnel);
  router.get("/personnels", isPersonnel, isAdmin, fetchPersonnels);
  router.post("/personnel", isPersonnel, isAdmin, createPersonnel);
  router.put("/personnel", isPersonnel, isAdmin, editPersonnel);
  router.delete(
    "/personnel/:personnelId",
    isPersonnel,
    isAdmin,
    deletePersonnel
  );
};
