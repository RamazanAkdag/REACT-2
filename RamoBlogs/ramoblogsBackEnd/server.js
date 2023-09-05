const express = require("express");
const router = require("./router");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(bodyParser.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log("server started on ", PORT);
});
