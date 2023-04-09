import Category from "../models/Category.js";
import { createError } from "../utils/createError.js";

//get all category
export const getAllProductCategory = async (req, res, next) => {
  try {
    const data = await Category.find();
    res.status(200).json({
      categories: data,
      messag: "get all data success",
    });
  } catch (error) {
    next(error);
  }
};

//create category
export const createProductCategory = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const data = await Category.create({
      name,
      slug,
      photo: req.file.filename,
    });
    res.status(200).json({
      category: data,
      message: "Category added successfully",
    });
  } catch (error) {
    next(error);
  }
};

//get a single product category
export const getSingleProductCategory = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const data = await Category.findOne({ slug });
    res.status(200).json({
      category: data,
      message: "get Single data successfull",
    });
  } catch (error) {
    next(createError("Category Not found", 404));
  }
};

//get a single product category
export const deleteProductCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Category.findByIdAndDelete(id);
    res.status(200).json({
      message: "Category deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

//update product category
export const updateProductCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Category.findByIdAndUpdate(
      id,
      {
        name,
        slug,
      },
      { new: true }
    );
    res.status(200).json({
      category: data,
      message: "Category updated successfully",
    });
  } catch (error) {
    next(error);
  }
};
