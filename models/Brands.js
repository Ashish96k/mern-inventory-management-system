const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({
  brandName: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Brands = mongoose.model('brand', brandSchema);

module.exports = Brands;
