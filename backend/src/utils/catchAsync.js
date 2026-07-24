/** @format */

const catchAsync = (handler) => {
  return (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch(next);
  };
};

export default catchAsync;
