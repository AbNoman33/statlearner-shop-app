import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/ProductController.js";

//create router
const router = express.Router();

//routes
router.route("/").get(getAllProducts).post(createProduct);

//export
export default router;
