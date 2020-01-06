const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  categoryName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Categories = mongoose.model('category', categorySchema);

module.exports = Categories;
