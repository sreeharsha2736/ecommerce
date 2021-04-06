import express from "express";
import Products from "./data.js";
const app = express();

app.get("/products", (req, res) => {
  res.send(Products);
});
app.listen(5000, () => console.log("sever started"));
