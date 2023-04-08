import jwt from "jsonwebtoken";
import CatchAsyncError from "../middleware/CatchAsyncError.js";
const login = CatchAsyncError(async (req, res, next) => {
  const { admin_id, password } = req.body;
  if (!admin_id || !password) {
    return next(new Error("Please provide the valid credentials"));
  }
  if (
    admin_id !== process.env.ADMIN_ID ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return next(new Error("Credentials did not match"));
  }
  const token = jwt.sign({}, process.env.JWT_SECRET, {
    algorithm: "HS256",
    expiresIn: 60 * 60 * 24 * 10,
  });
  res.cookie("authorization", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 10,
  });
  res.status(200).json({
    success: true,
    msg: "Login was successfull",
  });
});
export default login;
