import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
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
export const Admin = mongoose.model("admin", adminSchema);
