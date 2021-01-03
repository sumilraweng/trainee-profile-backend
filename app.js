//Server
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const employeeRouter = require("./routes/employeeRouter");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use("/employee", employeeRouter);

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
