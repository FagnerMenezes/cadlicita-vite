import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const PORT = 21179;
const app = express();
const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

app.use("/", express.static(path.join(__dirname, "./dist")));

app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});
