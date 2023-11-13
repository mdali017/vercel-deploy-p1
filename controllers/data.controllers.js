// const User = require("../models/data.model");

const User = require("../models/data.model");

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      age: Number(req.body.age),
    });
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User create successfully",
    });
  } catch (error) {
    console.log(15, error.message);
  }
};

// get all user
const getAllUser = async (req, res) => {
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
};

module.exports = { createUser, getAllUser };
