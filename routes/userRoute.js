const express = require("express");
const { createUser, getAllUser } = require("../controllers/data.controllers");
const userRouter = express.Router();

userRouter.get("/", getAllUser);
userRouter.post("/", createUser);

module.exports = userRouter;
