const Product = require("../models/product");
const uploadToCloudinary = require("../utils/uploadToCloudinary");
const mongoose = require("mongoose");

// users(customers) can only acess

const getProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 15;

  const skip = (page - 1) * limit;
  try {
    const products = await Product.find({}).limit(limit).skip(skip);
    res.status(200).json({
      currentPage: page,
      pageSize: limit,
      products,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// both can acesss

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Product.findById(id).populate("seller");

    if (!item) {
      return res.status(400).json({ message: "Product Not found" });
    }
    console.log(item);
    res.status(200).json({
      _id: item._id,
      name: item.name,
      selingPrice: item.price,
      discount: item?.discount,
      displayPercent: item.price > 0 ? (item?.discount / item?.price) * 100 : 0,
      displayPrice: item.price - item?.discount,
      description: item.description,
      stock: item.stock,
      sellerName: item.seller.name,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message, name: err.name });
  }
};

exports.viewIncrement = async function (req, res) {
  const { id } = req.params;
  try {
    Product.updateOne({ _id, id }, { $inc: views + 1 });
  } catch (err) {}
};
exports.topDeals = async (req, res) => {
  try {
    const result = await Product.find({
      discount: { $gt: 30 },
      rating: { $gt: 3.5 },
      stock: { $gte: 1 },
    })
      .sort({ discount: -1 })
      .limit(10);
    return res.status(200).json({
      message: "fetched Successfully.",
      products: result.map((item) => ({
        _id: item._id,
        name: item.name,
        description: item.description,
        image: item.image,
        discount: item.discount,
        price: item.price,
      })),
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.hotDeals = async (req, res) => {
  try {
    const result = await Product.find({
      purchaseCount: { $gt: 50 },
      views: { $gt: 500 },
      stock: { $gte: 1 },

    })
      .sort({ purchaseCount: -1, views: -1 })
      .limit(10);
    return res.status(200).json({
      message: "fetched Successfully.",
      products: result.map((item) => ({
        _id: item._id,
        name: item.name,
        description: item.description,
        image: item.image,
        discount: item.discount,
        price: item.price,
      })),
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.newArrivals = async (req, res) => {
  try {
    const date = new Date();
    const result = await Product.find({
      
      stock: { $gte: 1 },

    })
      .sort({ createdAt: -1})
      .limit(10);
    return res.status(200).json({
      message: "fetched Successfully.",
      products: result.map((item) => ({
        _id: item._id,
        name: item.name,
        description: item.description,
        image: item.image,
        discount: item.discount,
        price: item.price,
      })),
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
//to get similar products
// access only for sellers

const createProduct = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ mesage: "Image required!" });
  }

  const result = await uploadToCloudinary(req.file.buffer);
  const { name, price, description, stock, category } = req.body;
  const seller = req.userId;
  try {
    const newProduct = new Product({
      name,
      description,
      price,
      seller,
      stock,
      category,
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });
    const result = await newProduct.save();

    res.status(200).json({
      _id: result._id,
      name: result.name,
      description: result.description,
      price: result.price,
      stock: result.stock,
      category: result.category,
      image: result.image,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const sellerId = req.userId;

  try {
    const existingProduct = await Product.findOne({
      _id: id,
      seller: sellerId,
    });
    if (!existingProduct) {
      return res
        .status(400)
        .json({ message: "Delete your existing product only" });
    }

    const result = await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "deleted successfuly", result });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  const { name, price, description, discount, stock } = req.body;
  const seller = req.userId;

  try {
    const existingProduct = await Product.findOne({ _id: id, seller: seller });
    console.log(existingProduct);
    if (!existingProduct) {
      return res
        .status(400)
        .json({ message: "Update your existing product only" });
    }

    const update = await Product.findByIdAndUpdate(
      id,
      { name, price, description, discount, stock },
      { new: true, runValidators: true },
    );
    if (!update) {
      return res.status(400).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "successfully Updated" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  updateProduct,
  deleteProduct,
  createProduct,
  getProduct,
  getProducts,
};
