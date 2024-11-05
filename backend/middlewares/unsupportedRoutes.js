import HttpError from "../utils/HttpError.utils.js";

export default (req, res, next) => {
  throw new HttpError("Could not find this route.", 404);
};
