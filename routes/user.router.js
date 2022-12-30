import express from "express";

import {
  Register,
  Signin,
  Logout,
  ForgetPassword,
  Verify,
  ChangePasssword,
  UserDeatails,
  AllStudents,
  SingleUser,
  SingleAdmin,
} from "../controller/user.controller.js";

const router = express.Router();
//      /admin/userdetails
router.post("/register", Register);
router.post("/signin", Signin);
router.post("/forgetpassword", ForgetPassword);
router.post("/verifyotp", Verify);
router.post("/changepassword", ChangePasssword);
router.post("/logout", Logout);
router.post("/userdetails", UserDeatails);
router.get("/allstudents", AllStudents);
router.post("/singleuserdetail/:id", SingleUser);
router.post("/singleadmindetail/:id", SingleAdmin);

export default router;
