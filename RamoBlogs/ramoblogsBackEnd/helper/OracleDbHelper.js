const oracledb = require("oracledb");

const getOracleConnection = async () => {
  let conn;

  const config = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    connectString: process.env.CONN_STRING,
  };

  try {
    conn = await oracledb.getConnection(config);
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    oracledb.fetchAsString = [oracledb.CLOB];
  } catch (err) {
    console.log(err);
  }

  return conn;
};

module.exports = { getOracleConnection };
