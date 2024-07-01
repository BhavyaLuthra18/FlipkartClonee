import express from "express";

import { usersignup, userlogin } from "../controller/user-controller.js";
import {
  getProducts,
  getProductById,
} from "../controller/product-controller.js";

const router = express.Router();

router.post("/signup", usersignup);
router.post("/login", userlogin);

router.get("/products", getProducts);
router.get("/product/:id", getProductById);

export default router;
