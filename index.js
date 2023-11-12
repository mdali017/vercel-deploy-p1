const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 2000;

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json("Welcome to vercel server.");
});

// all product
app.get("/products", (req, res) => {
  res.send("All Product is here");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
