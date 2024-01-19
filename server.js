import "express-async-errors";
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
import jobRouter from "./routers/jobRouter.js";
import authRouter from './routers/authRouter.js'
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'
 
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//Middleware
app.use(express.json());
app.use(errorHandlerMiddleware);
//Routers
app.use("/api/v1/jobs",jobRouter);
app.use('/api/v1/auth',authRouter)

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});


try {
  await mongoose.connect(process.env.MONGO_URI);
  //port
  const port = process.env.PORT || 5100;
  app.listen(port, (req, res) => {
    console.log(`server is running on port ${port}`);
  });
} catch (error) {}
