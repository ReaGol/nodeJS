
import express from "express";

const app = express();
const router = express.Router();

const apiFunc = {
  home: (req, res) => {
    res.send("Welcome to Home Page");
  },
  get: (req, res) => {
    res.send("success using GET method");
  },

  post: (req, res) => {
    res.send("success using POST method");
  },

  delete: (req, res) => {
    res.send("success using DELETE method");
  },

  put: (req, res) => {
    res.send("success using PUT method");
  },
};

router.get("/home", apiFunc.home);
router.get("/numbers", apiFunc.get);
router.put("/numbers/:id", apiFunc.put);
router.post("/numbers/:id", apiFunc.post);
router.delete("/numbers/:id", apiFunc.delete);

app.use("/", router);
app.get("/", (req, res) => {
  res.redirect("/home");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
