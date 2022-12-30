import nodemailer from "nodemailer";
var admin_email = process.env.ADMIN_MAIL;
var password = process.env.ADMIN_MAIL_PASSWORD;

export const mailRegister = async (name, email) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: false,
    auth: {
      user: admin_email,
      pass: password,
    },
  });

  let info = await transporter.sendMail({
    from: '"Library App" <vigneshkanna3333@gmail.com>', // sender address
    to: `${email}`, // list of receivers
    subject: "Register Account", // Subject line
    text: `Hi , ${name} Succefully Registered your account`, // plain text body
    html: `Succefully Registered your account`, // html body
  });
  console.log("Message sent: %s", info.messageId);
};

export const sendOtp = async (email, otp) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: false,
    auth: {
      user: admin_email,
      pass: password,
    },
  });

  let info = await transporter.sendMail({
    from: '"Library App" <vigneshkanna3333@gmail.com>', // sender address
    to: `${email}`, // list of receivers
    subject: "Forget Password", // Subject line
    text: `Hi , ${email} Your otp is ${otp}`, // plain text body
    html: `Hi , ${email} Your otp is ${otp}`, // html body
  });
  console.log("Message sent: %s", info.messageId);
};

export const changePassword = async (email, content) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: false,
    auth: {
      user: admin_email,
      pass: password,
    },
  });

  let info = await transporter.sendMail({
    from: '"Library App" <vigneshkanna3333@gmail.com>', // sender address
    to: `${email}`, // list of receivers
    subject: "your password changed successfully", // Subject line
    text: `${content}`, // plain text body
    html: `${content}`, // html body
  });
  console.log("Message sent: %s", info.messageId);
};
