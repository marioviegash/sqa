function authorizeUser(req, res, next) {
  if (!req.headers || !req.headers.authorization) {
    return res.status(401).json({
      code: 401,
      status: 'FAILED',
      message: 'Unauthorized',
    })
  }
  
  var token = req.headers.authorization.split(' ')[1];
  if (token != 'test123') {
     return res.status(401).json({
      code: 401,
      status: 'FAILED',
      message: 'Unauthorized',
    })
  }
  return next();
}

module.exports = {
  authorizeUser,
}