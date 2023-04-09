import Brand from "../models/Brand.js";

//get all brands
export const getAllProductBrand = async (req, res, next) => {
  try {
    const brands = await Brand.find();
    res.status(200).json({ brands });
  } catch (error) {
    next(error);
  }
};

//create  brand
export const createProductBrand = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const brand = await Brand.create({
      name,
      slug,
      photo: req.file.filename,
    });
    res.status(200).json({ brand, message: "Brand created successfully" });
  } catch (error) {
    next(error);
  }
};

//GET singLE  brand
export const getSingleBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findById(id);
    res.status(200).json({ brand, message: "Get single brand successfully" });
  } catch (error) {
    next(error);
  }
};

//Delete brand
export const deleteBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findByIdAndDelete(id);
    res.status(200).json({ brand, message: "brand deleted successfully" });
  } catch (error) {
    next(error);
  }
};

//Update brand
export const updateBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug, photo } = req.body;
    const brand = await Brand.findByIdAndUpdate(
      id,
      {
        name,
        slug,
        photo,
      },
      {
        new: true,
      }
    );
    res.status(200).json({ brand, message: "brand updated successfully" });
  } catch (error) {
    next(error);
  }
};
