const ErrorHandler = (error, req, res, next) => {
  try {
    error.message = error.message || "Internal Server Error";
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode).json({
      error: error.message,
    });
  } catch (error) {
    res.status(500).json({
      err: "Internal Server Error",
    });
  }
};

export default ErrorHandler;
