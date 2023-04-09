import { createSlug } from "../helper/slugCreate.js";
import product from "../models/product.js";

//get all products
export const getAllProducts = async (req, res, next) => {
  try {
    const data = await product.find();
    res.status(200).json({
      products: data,
    });
  } catch (error) {
    next(error);
  }
};

//Create product
export const createProduct = async (req, res, next) => {
  try {
    const { name } = req.body;
    console.log(createSlug(name));
  } catch (error) {
    next(error);
  }
};
