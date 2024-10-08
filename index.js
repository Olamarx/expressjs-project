import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
const port = process.env.PORT;
const mongoDB = process.env.MONGODB_CONNECT;

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello, world!!!!");
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
    res.send(req.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("Connected to the database");
    app.listen(port, () => {
      console.log(`listen port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to Mongo");
  });
