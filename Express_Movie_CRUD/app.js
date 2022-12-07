import express from "express";
import fs from "fs";
import http from "http";
import { dataPath, getMoviesData, saveMoviesData } from "./utils.js";

const PORT = "3000";
const HOST = "localhost";
const app = express();
app.use(express.json());
const server = http.createServer((req, res) => {});

app.get("/movies", (req, res) => {
  const movies = getMoviesData();
  res.send(movies);
});

app.post("/movies", (req, res) => {
  const movies = getMoviesData();
  const movieData = { ...req.body };

  if (movieData.title == null) {
    return res.status(404).send({ error: true, msg: "Movie data missing" });
  }
  const findMovie = movies.find((movie) => movie.title === movieData.title);
  if (findMovie) {
    return res.status(409).send({ error: true, msg: "Movie already exists" });
  }
  movies.push(movieData);
  fs.writeFileSync(dataPath, JSON.stringify(movies));
  console.log(movieData);
  res.send(movies);
});

app.put("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movieData = { ...req.body };
  const movies = getMoviesData();
  const currentMovie = movies.find((movie) => movie.id === id);
  if (!currentMovie) {
    return res.status(409).send({ error: true, msg: "No such movie" });
  }
  const updateMovie = movies.filter((movie) => movie.id !== id);
  updateMovie.push(movieData)
  saveMoviesData(updateMovie)
  res.send({success: true, msg: "Movie updated successfully"})
});

app.delete("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movies = getMoviesData();
  const filterMovie = movies.filter((movie) => movie.id !== id);
  if (movies.length === filterMovie.length) {
    return res.status(409).send({ error: true, msg: "Movie does not exist" });
  }

  saveMoviesData(filterMovie);
  res.send({ success: true, msg: "Movie removed successfully" });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
