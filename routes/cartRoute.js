import express from "express";
import {
  addToCart,
  getCart,
  removeItemCart,
} from "../controllers/cartController.js";
import authMiddleware from "../middlewares/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/remove", authMiddleware, removeItemCart);
cartRouter.post("/get", authMiddleware, getCart);

export default cartRouter;
