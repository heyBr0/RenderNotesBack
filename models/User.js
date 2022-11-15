const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: [{ type: String, default: "Employee" }],
  active: {
    active: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", UserSchema);
