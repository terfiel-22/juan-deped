import { fetchPersonnels } from "../controllers/personnel.controller.js";

export default (router) => {
  router.get("/personnels", fetchPersonnels);
};
