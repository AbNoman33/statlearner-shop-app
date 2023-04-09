import express from "express";
import {
  createProductTag,
  deleteProductTag,
  getAllProductTags,
  getSingleProductTag,
  updateProductTag,
} from "../controllers/productTagController.js";

//create router
const router = express.Router();

//routes
router.route("/tag").get(getAllProductTags).post(createProductTag);
router
  .route("/tag/:id")
  .get(getSingleProductTag)
  .delete(deleteProductTag)
  .patch(updateProductTag)
  .put(updateProductTag);

//export
export default router;
