const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },


  streakCount: { type: Number, default: 0 },
  lastLoginDate: { type: Date },
});


module.exports = mongoose.model("User", userSchema);
