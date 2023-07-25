import mongoose from "mongoose";

/**
 * @description This file contains the Mongoose schema and model for the products in the store
 * @author [Hoang Le Chau](https://github.com/hoanglechau)
 */
const ProductSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
