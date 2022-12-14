import express from "express";

import {
  Register,
  Signin,
  //   Logout,
  ForgetPassword,
  Verify,
  ChangePasssword,
  //   Verify,
  //   Changepassword,
  //   Auth,
} from "../controller/admin.controller.js";

const router = express.Router();
//      /admin
router.post("/register", Register);
router.post("/signin", Signin);
router.post("/forgetpassword", ForgetPassword);
router.post("/verifyotp", Verify);
router.post("/changepassword", ChangePasssword);
// router.post("/logout", Logout);
// router.post("/forgetpassword", ForgetPassword);
// router.post("/verify-token", Verify);
// router.patch("/changepassword/:id", Changepassword);
// router.post("/auth", Auth);
// router.get("/getUsers", getUsers);

export default router;
