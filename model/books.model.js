import mongoose from "mongoose";

const booksSchema = new mongoose.Schema(
  {
    sno: {
      type: String,
      required: true,
    },
    bookId: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    copies: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "available",
    },
  },
  { timestamps: true }
);

export const AllBooks = mongoose.model("allbook", booksSchema);
