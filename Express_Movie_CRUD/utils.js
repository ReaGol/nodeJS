import fs from "fs"


import { fileURLToPath } from "url";
import path from "path";
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const jsonDirPath = path.join(__dirname, "./db");
console.log(__dirname);

export const dataPath = `${jsonDirPath}/movies.json`;


export const getMoviesData = () => {
  const dataJSON = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(dataJSON);
};

export const saveMoviesData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(dataPath, stringifyData);
};



