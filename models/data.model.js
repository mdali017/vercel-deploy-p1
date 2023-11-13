const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const User = mongoose.model("User", usersSchema);

module.exports = User;
