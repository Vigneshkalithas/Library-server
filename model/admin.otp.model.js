import moment from "moment-timezone";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const otpSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },

    adminId: {
      type: String,
    },
    otp: {
      type: Number,
    },
    expired_otp: {
      type: Boolean,
      default: false,
    },
    created_date: {
      type: String,
      default: moment().tz(process.env.Time_Zone).format("YYYY-MM-DD"),
    },
    created_time: {
      type: String,
      default: moment().tz(process.env.Time_Zone).format("HH:mm"),
    },
    expire_time: {
      type: String,
    },
    // expire_at: {
    //   type: Date,
    //   default: Date.now,
    //   expires: 30,
    // },
  },
  { timestamps: true }
);

export const Otp = mongoose.model("otp", otpSchema);
