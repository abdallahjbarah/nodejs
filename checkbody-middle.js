//create a checkbody middleware

//check if the body contains the name and price property
// if not , send back 400 (bad request)
//add it to the handler stack
exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Messing Name or Price',
    });
  }
  next();
};
