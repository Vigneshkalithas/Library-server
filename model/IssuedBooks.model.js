import mongoose from "mongoose";

const IssuedBooksSchema = new mongoose.Schema(
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
    balancecopies: {
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
    acceptance: {
      type: Boolean,
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
  },
  { timestamps: true }
);

export const IssuedBooks = mongoose.model("issuedbook", IssuedBooksSchema);
