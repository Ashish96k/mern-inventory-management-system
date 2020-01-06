const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storesSchema = new Schema({
  storeName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  contact: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  postalCode: {
    type: Number,
    required: true
  }
});

const Stores = mongoose.model('store', storesSchema);

module.exports = Stores;
