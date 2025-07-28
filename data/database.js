import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "TaskManager",
    })
    .then((c) => {
      console.log("DataBase Connected");
    })
    .catch((e) => {
      console.log(e);
    });
};