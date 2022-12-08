import express from "express";
import cors from "cors";
import { Route } from "./routes/router.js";

const app = express();
const port = 8000;

app.use(cors());
app.use("/", Route);
app.use(express.json())

app.listen(port, () => {
  console.log("listening on port" + port);
});
