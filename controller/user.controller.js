import { User } from "../model/user.model.js";
import { Sessions } from "../model/session.model.js";
import { Otp } from "../model/user.otp.model.js";
import bcrypt from "bcrypt";
import moment from "moment-timezone";
import { sendOtp, mailRegister, changePassword } from "../utils/nodeMailer.js";
import generateToken from "../utils/generateToken.js";
import { UserDetails } from "../model/user.detail.model.js";

const Register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const ExistUser = await User.findOne({ email: email });
    if (!ExistUser) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      const userData = { name, email, password: hash, role };
      const user = new User(userData);
      const token = generateToken({ _id: user._id });
      const sessionData = new Sessions({
        userId: user._id,
        token,
        role,
      });

      await user.save();
      await sessionData.save();
      res.status(200).send({
        error: false,
        message: "Register successfully",
        sessionData: sessionData,
      });
      mailRegister(name, email);
    } else {
      res.status(404).send({ error: true, message: "User already exists" });
    }
  } catch (error) {
    res.status(404).send({ error: true, message: "Something went wrong" });
  }
};

const Signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(404).send({ message: "Invalid Credentials" });
    } else {
      bcrypt.compare(password, user.password, async (error, result) => {
        if (!result)
          res.status(401).send({ error: true, message: "Invalid Credential" });
        if (result) {
          const token = generateToken({ _id: user._id });
          const sessionData = new Sessions({
            userId: user._id,
            token,
            role: user.role,
          });
          await user.save();
          await sessionData.save();
          res.status(200).json({
            error: false,
            message: "Logged in successfully",
            sessionData,
          });
        }
      });
    }
  } catch (error) {
    res
      .status(404)
      .send({ error: true, message: "Sorry something went wrong" });
  }
};

const ForgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const existUser = await User.findOne({ email: email });
    if (existUser) {
      const otp = Math.floor(100000 + Math.random() * 900000);
      const userId = existUser._id;
      const { name, email } = existUser;
      const current_time = moment().tz(process.env.Time_Zone).format("HH:mm");
      const expire_time = moment(current_time, "HH:mm")
        .add(3, "minutes")
        .format("HH:mm");
      const otpData = { name, email, userId, otp, expire_time };
      const OTp = new Otp(otpData);
      await OTp.save();
      sendOtp(email, otp);
      res.status(200).send({ error: false, message: "Otp Send Succesfully" });
    } else {
      res.status(404).send({ error: true, message: "User not exists" });
    }
  } catch (error) {
    res
      .status(404)
      .send({ error: true, message: "sorry something went wrong" });
  }
};

const Verify = async (req, res) => {
  try {
    const userotp = req.body.otp;
    const currentDate = moment().tz(process.env.Time_Zone).format("YYYY-MM-DD");
    const currentTime = moment().tz(process.env.Time_Zone).format("HH:mm");
    const checkOtp = await Otp.findOne({ otp: userotp });
    const { otp, expired_otp, created_date, userId, expire_time } = checkOtp;
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
          userId: userId,
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
    res
      .status(404)
      .send({ error: true, message: "sorry your otp is incorrect" });
  }
};

const ChangePasssword = async (req, res) => {
  // const { id } = req.params
  try {
    const { userId, password, passwordConfirmation } = req.body;
    const cnfrmOtpVerified = await Otp.findOne({ userId });
    if (cnfrmOtpVerified.expired_otp == true) {
      if (password == passwordConfirmation) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const chpwd = await User.findOneAndUpdate(userId, {
          password: hash,
        });

        const Token = await Sessions.findOne({ userId });
        const { token } = Token;
        await chpwd.save();
        changePassword(cnfrmOtpVerified.email, "password changed successfully");

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
    res
      .status(404)
      .send({ error: true, message: "sorry something went wrong" });
  }
};

const UserDeatails = async (req, res) => {
  try {
    const { stname, dept, regno, mail } = req.body;
    const userDetailData = { stname, dept, regno, mail };
    const user = await User.findOne({ email: mail });
    const userId = user._id;
    const userswithId = { stname, dept, regno, mail, userId: userId };
    const users = new UserDetails(userswithId);
    await users.save();
    res.status(200).send({
      error: false,
      message: "userdetails saved succefully",
      users: users,
    });
  } catch (error) {
    res.status(404).send({ error: true, message: "Something went wrong" });
  }
};

const AllStudents = async (req, res) => {
  try {
    const students = await UserDetails.find();
    res.status(200).send({
      error: true,
      message: "student details successfully",
      students: students,
    });
  } catch (error) {
    res.status(404).send({ message: true, message: "something went wrong" });
  }
};
const SingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const Student = await UserDetails.findOne({ id });
    res.status(200).send({
      error: true,
      message: "student details successfully",
      Student: Student,
    });
  } catch (error) {
    res.status(404).send({ message: true, message: "something went wrong" });
  }
};
const SingleAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const Student = await User.findById(id);
    res.status(200).send({
      error: true,
      message: "student details successfully",
      Student: Student,
    });
  } catch (error) {
    res.status(404).send({ message: true, message: "something went wrong" });
  }
};
export {
  Register,
  Signin,
  ForgetPassword,
  Verify,
  ChangePasssword,
  Logout,
  UserDeatails,
  AllStudents,
  SingleUser,
  SingleAdmin,
};
