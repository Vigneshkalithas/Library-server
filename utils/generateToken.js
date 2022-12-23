import jwt from "jsonwebtoken";

// token: generateToken(Otpdata._id),

const generateToken = (id) => {
  return jwt.sign({ _id: id + Date.now() }, process.env.JWT_SECRET, {
    expiresIn: "20d",
  });
};

export default generateToken;
