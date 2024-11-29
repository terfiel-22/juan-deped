import { fetchPersonnelInformations } from "../../controllers/personnel/personnel-information.controller.js";

export default (router) => {
  router.get("/personnel/informations", fetchPersonnelInformations);
};
