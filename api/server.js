import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import productCategoryRoute from "./routes/productCategory.js";
import productBrandRoute from "./routes/productBrand.js";
import mongoDBConnect from "./config/db.js";
import { errorHandle } from "./middlewares/errorHandler.js";

//environment variable
dotenv.config();
const PORT = process.env.SERVER_PORT || 7070;

//init express
const app = express();

//middlewars
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//set static
app.use(express.static("api/public"));

//routes
app.use("/api/v1/product", productCategoryRoute);
app.use("/api/v1/product", productBrandRoute);

//user error handler
app.use(errorHandle);

//listen
app.listen(PORT, () => {
  mongoDBConnect();
  console.log(`server is running on port ${PORT}`.bgGreen.black);
});
