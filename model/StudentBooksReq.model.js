import mongoose from "mongoose";

const StudentBooksReqSchema = new mongoose.Schema(
  {
    sId: {
      type: String,
      required: true,
    },
    sname: {
      type: String,
      required: true,
    },
    bId: {
      type: String,
      required: true,
    },

    availabecopies: {
      type: String,
      required: true,
    },
    bname: {
      type: String,
      required: true,
    },

    dept: {
      type: String,
      required: true,
    },
    regno: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    acceptance: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export const StuBookReq = mongoose.model(
  "studentbookreq",
  StudentBooksReqSchema
);
