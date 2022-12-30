import mongoose from "mongoose";

const useDetailsSchema = new mongoose.Schema(
  {
    stname: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
    },
    dept: {
      type: String,
      required: true,
    },
    regno: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const UserDetails = mongoose.model("userDetail", useDetailsSchema);
