const { getOracleConnection } = require("../helper/OracleDbHelper");

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const dbConn = await getOracleConnection();

    const sql =
      "select id,username,fullname,email,startdate from users where id=:userid";

    const result = (await dbConn.execute(sql, [id])).rows[0];

    res.json({
      success: "true",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: "false",
      message: "get user infos failed",
    });
  }
};

module.exports = { getUserById };
