import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRouter from "./routes/userRoute.js";
import taskRouter from "./routes/taskRoute.js";
import forgotPasswordRouter from "./routes/forgotPassword.js";

// App config
dotenv.config();
const app = express();
const port = process.env.PORT || 8001;
mongoose.set("strictQuery", true);

// CORS setup (Add this before any routes)
app.use(cors({
  origin: "http://192.168.1.25:3000",  
  credentials: true
}));

// Middlewares
app.use(express.json());

// DB config
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
}, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("DB Connected");
  }
});

// API endpoints
app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);
app.use("/api/forgotPassword", forgotPasswordRouter);

// Optional root test route
app.get("/", (req, res) => {
  res.send("Backend API is running!");
});

// Listen
app.listen(port, '0.0.0.0', () => {
  console.log(`Listening on 0.0.0.0:${port}`);
});
