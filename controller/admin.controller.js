import { Admin } from "../model/admin.model.js";
import { Sessions } from "../model/session.model.js";
import { Otp } from "../model/admin.otp.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import moment from "moment-timezone";
import { sendOtp, mailRegister, chapwd } from "../utils/nodeMailer.js";
import generateToken from "../utils/generateToken.js";

const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const ExistAdmin = await Admin.findOne({ email: email });
    if (!ExistAdmin) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      const adminData = { name, email, password: hash };
      const admin = new Admin(adminData);
      const token = generateToken({ _id: admin._id });
      const sessionData = new Sessions({ adminId: admin._id, token });
      await admin.save();
      await sessionData.save();
      res.status(200).send({
        error: false,
        message: "Register successfully",
        sessionData: sessionData,
      });
      // mailRegister(name, email);
    } else {
      res.status(404).send({ error: true, message: "Admin already exists" });
    }
  } catch (error) {
    res.status(404).send({ error: true, message: "Something went wrong" });
  }
};

// reg api works fine
const Signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email: email });
    if (!admin) {
      res.status(404).send({ message: "Invalid Credentials" });
    } else {
      bcrypt.compare(password, admin.password, async (error, result) => {
        if (!result)
          res.status(401).send({ error: true, message: "Invalid Credential" });
        if (result) {
          const token = generateToken({ _id: admin._id });
          const sessionData = new Sessions({ adminId: admin._id, token });
          await admin.save();
          await sessionData.save();
          res.status(200).json({
            error: false,
            message: "Admin logged in successfully",
            sessionData,
          });
        }
      });
    }
  } catch (error) {
    res
      .status(404)
      .send({ error: true, message: "Sorry something went wrong" });
    console.log(error);
  }
};

// sign api works fine

const ForgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const existAdmin = await Admin.findOne({ email: email });
    if (existAdmin) {
      const otp = Math.floor(100000 + Math.random() * 900000);
      const adminId = existAdmin._id;
      const { name, email } = existAdmin;
      const current_time = moment().tz(process.env.Time_Zone).format("HH:mm");
      const expire_time = moment(current_time, "HH:mm")
        .add(3, "minutes")
        .format("HH:mm");
      const otpData = { name, email, adminId, otp, expire_time };
      const OTp = new Otp(otpData);
      await OTp.save();
      // sendOtp(email, otp);
      res.status(200).send({ error: false, message: "Otp Send Succesfully" });
    } else {
      res.status(404).send({ error: true, message: "Admin not exists" });
    }
  } catch (error) {
    res
      .status(404)
      .send({ error: true, message: "sorry something went wrong" });
    console.log(error);
  }
};

const Verify = async (req, res) => {
  try {
    const userotp = req.body.otp;
    const currentDate = moment().tz(process.env.Time_Zone).format("YYYY-MM-DD");
    const currentTime = moment().tz(process.env.Time_Zone).format("HH:mm");
    const checkOtp = await Otp.findOne({ otp: userotp });
    const { otp, expired_otp, created_date, adminId, expire_time } = checkOtp;
    if (
      currentDate === created_date &&
      expired_otp === false &&
      expire_time > currentTime
    ) {
      if (userotp == otp) {
        const oTpExpiration = await Otp.findOneAndUpdate(otp, {
          expired_otp: true,
        });
        await oTpExpiration.save();

        res.status(200).json({
          error: false,
          message: "Otp verified successfully",
          adminId: adminId,
        });
      } else {
        res
          .status(404)
          .send({ error: true, message: "Sorry your otp incorrect" });
      }
    } else {
      res.status(404).send({ error: true, message: "Sorry your otp expired" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .send({ error: true, message: "sorry your otp is incorrect" });
  }
};

const ChangePasssword = async (req, res) => {
  // const { id } = req.params
  try {
    const { adminId, password, passwordConfirmation } = req.body;
    const cnfrmOtpVerified = await Otp.findOne({ adminId });
    if (cnfrmOtpVerified.expired_otp == true) {
      if (password == passwordConfirmation) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const chpwd = await Admin.findOneAndUpdate(adminId, {
          password: hash,
        });
        const Token = await Sessions.findOne({ adminId });
        const { token } = Token;
        await chpwd.save();
        // chapwd(cnfrmOtpVerified.email, "password changed successfully");
        res.status(200).send({
          error: false,
          message: "Password changed successfully",
          token: token,
        });
      }
    } else {
      res.status(404).send({ error: true, message: "Not Authorized" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .send({ error: true, message: "Sorry  something went wrong" });
  }
};

const Logout = async (req, res) => {
  try {
    const { token } = req.body;
    const expireCheck = await Sessions.findOneAndUpdate(
      { token },
      { expired: true }
    );
    await expireCheck.save();
    res.status(200).send({ error: false, message: "logout succesfully" });
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .send({ error: true, message: "sorry something went wrong" });
  }
};

export { Register, Signin, ForgetPassword, Verify, ChangePasssword, Logout };
