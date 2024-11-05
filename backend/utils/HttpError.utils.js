class HttpError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.code = errorCode;

    // Ensure the error stack trace is correctly set
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpError);
    }
  }
}

export default HttpError;
