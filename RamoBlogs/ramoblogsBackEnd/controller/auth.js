const { getOracleConnection } = require("../helper/OracleDbHelper");
const { generateToken } = require("../helper/jwtOps");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  console.log("POST http://localhost:5000/api/auth/register ");
  const { id, username, fullname, email, password } = req.body;

  let dbConn;
  try {
    dbConn = await getOracleConnection();

    const encryptedPassword = await bcrypt.hash(password, 10);

    const sql =
      "insert into users (id,username,fullname,email,password) values (:id,:username,:fullname,:email,:password)";
    const insert = await dbConn.execute(sql, [
      id,
      username,
      fullname,
      email,
      encryptedPassword,
    ]);
    dbConn.commit();

    res.status(201).json({
      success: "true",
      message: "user registration is fully completed",
    });
  } catch (err) {
    console.log(err);

    if (err.code === "ORA-00001") {
      res.status(409).json({
        success: false,
        message: "there is already a user with the same username",
      });
    }
  } finally {
    dbConn.close();
  }
};

const login = async (req, res) => {
  console.log("POST http://localhost:5000/api/auth/login");
  const { username, password } = req.body;

  let dbConn;
  try {
    dbConn = await getOracleConnection();

    const sql =
      "select username,password,email,id from users where username=:username";
    const result = (await dbConn.execute(sql, [username])).rows[0];

    console.log(result);
    //get hashed password and compare
    const { USERNAME, PASSWORD, EMAIL, ID } = result;
    const compare = await bcrypt.compare(password, PASSWORD);
    if (compare) {
      const token = generateToken({ USERNAME, EMAIL, ID });

      res.status(200).cookie("token", token).json({
        success: "true",
        message: "user login is successfully",
        token: token,
      });
    } else {
      res.status(401).json({
        success: "false",
        message: "username or password are wrong",
      });
    }
  } catch (err) {
    console.log(err);

    res.status(400).json({
      success: false,
      message: "user not found",
    });
  } finally {
    dbConn.close();
  }
};

module.exports = { register, login };
