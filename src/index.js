import dotenv from "dotenv";
dotenv.config();
import { app } from "./app";
const root = document.querySelector("#root");
setInterval(() => {
  root.innerHTML = app();
}, 1000);
