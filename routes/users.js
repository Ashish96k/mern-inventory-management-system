const express = require('express');
const router = express.Router();
const Users = require('../models/Users');

// READ
router.get('/', (req, res) => {
  Users.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// CREATE
router.post('/', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const gender = req.body.gender;

  if (
    firstName &&
    lastName &&
    email &&
    phone &&
    address &&
    city &&
    state &&
    zip &&
    gender
  ) {
    const userData = new Users({
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zip,
      gender
    });
    userData
      .save()
      .then(() => res.json('User has been saved !!'))
      .catch(err => res.status(400).json('Error: ' + err));
  }
});

// DELETE
router.delete('/:id', (req, res) => {
  Users.findById(req.params.id)
    .then(user =>
      user
        .remove()
        .then(() => res.json(`User with id ${req.params.id} has been deleter`))
        .catch(err => res.status(400).json('Error: ' + err))
    )
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
