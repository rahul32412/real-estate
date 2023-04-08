import mongoose from "mongoose";
const db_connect = () => {
  mongoose
    .connect(process.env.MONGO_URI_STRING)
    .then(() => {
      console.log("Database connection successful");
      console.log(err);
    })
    .catch((err) => {});
};

export default db_connect;
