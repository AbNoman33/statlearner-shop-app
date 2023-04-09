import Tag from "../models/Tag.js";

//get all product tags
export const getAllProductTags = async (req, res, next) => {
  try {
    const data = await Tag.find();
    res.status(200).json({
      tags: data,
      message: "All tags find successful",
    });
  } catch (error) {
    next(error);
  }
};

//Create product tags
export const createProductTag = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const data = await Tag.create({ name, slug });
    res.status(200).json({
      tag: data,
      message: "Tag created successfullys",
    });
  } catch (error) {
    next(error);
  }
};

//Create product tags
export const getSingleProductTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Tag.findById(id);
    res.status(200).json({
      tag: data,
      message: "get single tag successful",
    });
  } catch (error) {
    next(error);
  }
};

//Delete product tags
export const deleteProductTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Tag.findByIdAndDelete(id);
    res.status(200).json({
      tag: data,
      message: "tag deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

//Update product tags
export const updateProductTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Tag.findByIdAndUpdate(
      id,
      {
        name,
        slug,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      tag: data,
      message: "tag updated successfully",
    });
  } catch (error) {
    next(error);
  }
};
