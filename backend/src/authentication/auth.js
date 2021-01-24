const jwt = require("jsonwebtoken");
const tokenSecret = "test";

module.exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);
  jwt.verify(token, tokenSecret, { maxAge: 86400 }, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

module.exports.generateToken = (user) => {
  return jwt.sign(user, tokenSecret, { expiresIn: 86400 });
};
