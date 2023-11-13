const express = require("express");
const cors = require("cors");
const userRouter = require("../routes/userRoute");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // user router
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to vercel server.",
  });
});

// all product
app.get("/products", (req, res) => {
  res.status(200).json({
    success: true,
    message: "All Product is here",
  });
});

module.exports = app;
