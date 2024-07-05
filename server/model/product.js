const mongoose = require("mongoose");
// const { schema } = require("./user");

const Schema = mongoose.Schema;

const addproduct = new Schema({
  title: {
    type: String,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  quantity: {
    type:Number,
    default: 1,
  },
  image: [{
    name: String,
    data: String,
    contentType: String,
    path: String,
  }],
});

const products = mongoose.model("products", addproduct);
module.exports = products;
