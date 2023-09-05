const jwt = require("jsonwebtoken");
const tokenCheck = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        throw err;
      }
      req.access_token = decoded;
      next();
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: "false",
      message: "there was a problem in token authorization. Please login",
    });
  }
};

module.exports = tokenCheck;
