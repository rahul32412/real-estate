import jwt from "jsonwebtoken";
import CatchAsyncError from "../middleware/CatchAsyncError.js";

const authAdmin = CatchAsyncError((req, res, next) => {
  jwt.verify(
    req.headers.authorization,
    process.env.JWT_SECRET,
    (err, payload) => {
      if (err) {
        switch (err.name) {
          case "TokenExpiredError":
            return res
              .status(401)
              .json({ err: "Your token has been expired at " + err.expiredAt });
          case "JsonWebTokenError":
            return res.status(400).json({ err: "Invalid authorization token" });
          default:
            return res.status(401).json({ err: "Login failed" });
        }
      }
      next();
    }
  );
});

export default authAdmin;
