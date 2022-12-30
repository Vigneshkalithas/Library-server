import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    register_date: {
      type: Date,
      default: Date.now,
    },
    expire_date: {
      type: Date,
      default: Date.now() + 365 * 24 * 60 * 60000,
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("user", userSchema);
