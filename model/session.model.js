import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    adminId: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    expired: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Sessions = mongoose.model("session", sessionSchema);
