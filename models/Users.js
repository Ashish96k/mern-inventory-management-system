const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
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
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Users = mongoose.model('user', usersSchema);

module.exports = Users;
