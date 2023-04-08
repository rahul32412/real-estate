import dotenv from "dotenv";
import express from "express";
import db_connect from "./config/db_connect.js";
import ErrorHandler from "./middleware/Errorhandler.js";
import authAdmin from "./middleware/auth.js";

// importing the routers

// User route
import admin_login from "./routes/login.js";
// Property router
import property_router from "./routes/property_router.js";

dotenv.config({ path: "./config/.env" });
db_connect();

const app = express();

app.use(express.json());

// using the routers
app.use("/api/admin", admin_login);
// use property router
app.use("/api/property", authAdmin, property_router);

// Using the error middleware
app.use(ErrorHandler);

app.listen(process.env.SERVER_PORT, () => {
  console.log("App is running on http://localhost:" + process.env.SERVER_PORT);
});
