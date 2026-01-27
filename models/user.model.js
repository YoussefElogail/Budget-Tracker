const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minLength: 2,
      maxLength: 30,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [6, "Too short password"],
    },
    phone: [String],
    address: [String],
    dateOfBirth: Date,
    jobs: [String],
    role: { type: String, enum: ["user", "admin"], default: "user" },
    profileImage: String,
  },
  {
    timestamps: true,
    // عشان الـ Virtuals تظهر في الـ JSON
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 12);
});

userSchema.virtual("wallets", {
  ref: "Wallet",
  foreignField: "user",
  localField: "_id",
});

const User = mongoose.model("User", userSchema);
module.exports = User;
