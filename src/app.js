const express = require("express");
const cors = require("cors");
const userRouter = require("../routes/userRoute");
const User = require("../models/data.model");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // user router
// app.use("/api/users", userRouter);

// For All users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      message: "All users is here..",
      users: users,
    });
  } catch (error) {
    console.log(error.message);
  }
});

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
