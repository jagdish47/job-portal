import express from "express";
import router from "./routes/route.js";
import bodyParser from "body-parser";
import cors from "cors";
import dbConnection from "./database/db.js";
const app = express();

//For Different Cross
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

const PORT = process.env.PORT || 8000;

app.use("/", router);

dbConnection();

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
