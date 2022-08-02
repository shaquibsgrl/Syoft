const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    phone: { type: Number, required: true, maxlength: 10, minlength: 10 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      default: "admin",
      enum: ["admin", "manager", "staff"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre("save", function (next) {
  const hash = bcrypt.hashSync(this.password, 10);
  this.password = hash;
  return next();
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("user", userSchema);

module.exports = User;