import express from "express";
import {
  AddBooks,
  GetAllBooks,
  EditBooks,
  SingleBook,
  DeleteBook,
  RequestBook,
  UserReqBooks,
  DeleteRequests,
  IssuedBooksCollections,
  IssuedBooksDetails,
  userHaveBooks,
  updateReq,
} from "../controller/book.contoller.js";
const router = express.Router();

// /books/

router.post("/addbooks", AddBooks);
router.get("/allbooks", GetAllBooks);
router.put("/editbook/:id", EditBooks);
router.get("/singlebook/:id", SingleBook);
router.delete("/deletebook/:id", DeleteBook);
router.post("/request", RequestBook);
router.get("/userreqBooks", UserReqBooks);
router.delete("/delrequests/:id", DeleteRequests);
router.post("/acceptrequests", IssuedBooksCollections);
router.get("/issuedbooksdetails", IssuedBooksDetails);
router.post("/collections", userHaveBooks);
router.put("/updaterequests/:id", updateReq);

export default router;
