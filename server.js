import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config
const app = express();
const port = process.env.PORT || 5000;

//db connection
connectDb();

//middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is working!!!");
});

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.listen(port, () => {
  console.log("server is running at", port);
});
