import HttpError from "../utils/HttpError.utils.js";

const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    return res.status(err.code || 500).json({
      message: err.message || "An unknown error occurred.",
      errors: err.errors || [],
    });
  }
  console.log(err);

  // Handle other errors
  res.status(500).json({
    message: "An unknown error occurred.",
  });
};

export default errorHandler;
