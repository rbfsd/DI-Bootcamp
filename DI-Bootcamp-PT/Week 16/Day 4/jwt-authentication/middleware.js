const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
  const token =
    req.cookies.accessToken ||
    req.header("Authorization").replace("Bearer ", "");
  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, "accessSecret", (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateJWT;
