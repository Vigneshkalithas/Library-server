import jwt from "jsonwebtoken";

// token: generateToken(Otpdata._id),

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "20d",
  });
  // return jwt.sign({id : id + Date.now() }, process.env.SECRET , ) ;
};

export default generateToken;
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODg0MmNlOTViOTc4NDA4NDcyYzZkYiIsImlhdCI6MTYxOTg4MTg5NSwiZXhwIjoxNjIyNDczODk1fQ.7E7ZIXNUIvgaOpLn70KzcMPBcUHs3deGK5HKLqllhB4
