class HttpError extends Error {
  constructor(message, errorCode, errors = []) {
    super(message);
    this.code = errorCode;
    this.errors = errors;

    // Ensure the error stack trace is correctly set
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpError);
    }
  }
}

export default HttpError;
