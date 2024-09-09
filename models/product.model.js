import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      requires: [true, "Please enter a product name"],
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    Image: {
      type: String,
      required: false,
    },
  },

  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
