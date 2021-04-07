import express from "express";
import products from "./data.js";
const app = express();

app.get("/products", (req, res) => {
  res.send(products);
});
app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  res.send(products.find((x) => x.id == productId));
});
app.listen(5000, () => console.log("sever started"));
