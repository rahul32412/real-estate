const CatchAsyncError = (controller) => {
  return (req, res, next) => {
    Promise.resolve(controller(req, res, next)).catch((err) =>
      console.log(err)
    );
  };
};

export default CatchAsyncError;
