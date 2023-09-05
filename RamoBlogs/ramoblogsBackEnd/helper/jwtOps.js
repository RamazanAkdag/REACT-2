const jwt = require("jsonwebtoken");

const generateToken = (data) => {
  const token = jwt.sign(
    {
      data,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "10m" }
  );
  return token;
};

module.exports = { generateToken };
