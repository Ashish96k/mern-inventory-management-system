const express = require('express');
const router = express.Router();
const Stores = require('../models/Stores');

// READ
router.get('/', (req, res) => {
  Stores.find()
    .then(storeData => res.json(storeData))
    .catch(err => res.status(400).json('Error: ' + err));
});

// CREATE
router.post('/', (req, res) => {
    const storeName = req.body.storeName;
    const contact = req.body.contact;
    const address = req.body.address;
    const postalCode = req.body.postalCode;

  if (storeName && contact && address && postalCode){
    const storeData = new Stores({
      storeName,
      contact,
      address,
      postalCode
    });
    storeData
    .save()
    .then(() => res.json('Store Added !'))
    .catch(err => res.status(400).json('Error: ' + err));
  } else{
    res.json('Please Provide the valid input !!')
  }
});

// DELETE
router.delete('/:id', (req, res) => {
  Stores.findById(req.params.id)
    .then(storeData =>
      storeData
        .remove()
        .then(() =>
          res.json(`Store with id ${req.params.id} has been removed !`)
        )
        .catch(err => res.status(400).json('Error: ' + err))
    )
    .catch(err => res.json('Error: ' + err));
});

module.exports = router;
