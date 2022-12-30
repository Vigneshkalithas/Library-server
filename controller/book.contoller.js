import { AllBooks } from "../model/books.model.js";
import { User } from "../model/user.model.js";
import { UserDetails } from "../model/user.detail.model.js";
import { StuBookReq } from "../model/StudentBooksReq.model.js";
import { IssuedBooks } from "../model/IssuedBooks.model.js";

const AddBooks = async (req, res) => {
  try {
    const { sno, title, author, copies } = req.body;
    const bookData = { sno, title, copies, author };
    const book = new AllBooks(bookData);
    const { _id } = book;
    const bookswithId = { sno, title, copies, author, bookId: _id };
    const books = new AllBooks(bookswithId);
    await books.save();
    res.status(200).send({ error: false, message: "book added successfully" });
  } catch (error) {
    res.status(404).send({ error: true, message: "something went something" });
  }
};

const GetAllBooks = async (req, res) => {
  try {
    const books = await AllBooks.find();
    res.status(200).send({
      error: false,
      message: "allbooks got successfully",
      books: books,
    });
  } catch (error) {
    res.status(404).send({ error: true, message: "Something went wrong" });
  }
};

const EditBooks = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const book = await AllBooks.findByIdAndUpdate(id, { ...data });
    await book.save();
    res.status(200).send({ error: false, message: "Edited successfully" });
  } catch (error) {
    res.status(404).send({ error: true, message: "Something went wrong" });
  }
};

const SingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const singleBook = await AllBooks.findById(id);
    res.status(200).send({
      error: false,
      message: "got successfully",
      singleBook: singleBook,
    });
  } catch (error) {
    res.status(404).send({ error: true, message: "Something went wrong" });
  }
};

const DeleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await AllBooks.findByIdAndDelete(id);
    res
      .status(200)
      .send({ error: false, message: "Book Deleted Successfully" });
    // await book.save();
  } catch (error) {
    res.status(404).send({ error: true, message: "Something went wrong" });
  }
};

const RequestBook = async (req, res) => {
  try {
    const { sId, bId } = req.body;
    const userwithId = await UserDetails.findOne({ userId: sId });
    const bookwithId = await AllBooks.findOne({ bookId: bId });
    const { stname, dept, regno } = userwithId;
    // const upDatedCopies = parseInt(bookwithId.copies);
    const { title, copies } = bookwithId;
    const ReqDet = {
      sId,
      sname: stname,
      dept,
      regno,
      bId,
      bname: title,
      availabecopies: copies,
      status: true,
      acceptance: false,
    };
    const ReqDetails = new StuBookReq(ReqDet);
    await ReqDetails.save();
    res.status(200).send({
      error: false,
      message: "request send successfully",
      status: ReqDetails.status,
    });
  } catch (error) {
    res.status(404).send({ error: true, message: "Something went wrong" });
  }
};

const UserReqBooks = async (req, res) => {
  try {
    const allRequests = await StuBookReq.find();
    res.status(200).send({
      error: false,
      message: "Details got successfully",
      allRequests: allRequests,
    });
  } catch (error) {
    res.status(404).send({
      error: true,
      message: "something went wrong",
    });
  }
};

const DeleteRequests = async (req, res) => {
  try {
    const { id } = req.params;

    const Requests = await StuBookReq.findByIdAndDelete(id);
    res.status(200).send({ error: false, message: "Req Deleted Successfully" });
  } catch (error) {
    res.status(404).send({
      error: true,
      message: "something went wrong",
    });
  }
};

const IssuedBooksCollections = async (req, res) => {
  try {
    const { sId, sname, bId, availabecopies, bname, dept, regno, acceptance } =
      req.body;
    const balancecopies = parseInt(availabecopies) - 1;
    const Accept = {
      sId,
      sname,
      bId,
      availabecopies,
      balancecopies,
      bname,
      dept,
      regno,
      acceptance: true,
      // returnstatus:false
    };
    const AcceptLists = new IssuedBooks(Accept);
    await AcceptLists.save();
    const filter = { bookId: bId };
    const update = {
      copies: `${balancecopies}`,
    };
    const UpdateCopies = await AllBooks.findOneAndUpdate(filter, update);
    await UpdateCopies.save();
    const UpdateStatus = await StuBookReq.findOneAndUpdate(bId, {
      acceptance: true,
    });
    await UpdateStatus.save();

    res
      .status(200)
      .send({ error: false, message: "request acceptedd successfully" });
  } catch (error) {
    res.status(404).send({ error: true, message: "something went wrong" });
  }
};
const IssuedBooksDetails = async (req, res) => {
  try {
    const AllissuedBooksDetails = await IssuedBooks.find();
    res.status(200).send({
      error: false,
      message: "got it success",
      details: AllissuedBooksDetails,
    });
  } catch (error) {
    res.status(404).send({ error: true, message: "something went wrong" });
  }
};

const userHaveBooks = async (req, res) => {
  try {
    const { sId } = req.body;
    const userhavebook = await IssuedBooks.find(sId);
    res.status(200).send({
      error: false,
      message: "got successfully",
      collections: userhavebook,
    });
  } catch (error) {
    res.status(404).send({ error: true, message: "something went wrong" });
  }
};

const updateReq = async (req, res) => {
  try {
    const { id } = req.params;

    const Requests = await StuBookReq.findByIdAndUpdate(id, {
      acceptance: true,
    });
    res
      .status(200)
      .send({ error: false, message: "request status changed successfully" });
  } catch (error) {
    res.status(404).send({ error: true, message: "something went wrong" });
  }
};

export {
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
};
