import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ _id: id + Date.now() }, process.env.JWT_SECRET, {
    expiresIn: "20d",
  });
};

export default generateToken;
