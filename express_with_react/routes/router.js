import express from "express";
import { getWeather } from "./controllers/controller";
export const router = express.Router();

router.get("/weather", getWeather);
