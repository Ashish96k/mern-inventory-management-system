const express = require('express');
const router = express.Router();
const Brands = require('../models/Brands');

// READ
router.get('/', (req, res) => {
  Brands.find()
    .then(brandData => res.json(brandData))
    .catch(err => res.status(400).json('Error: ' + err));
});

// CREATE
router.post('/', (req, res) => {
  const brandName = req.body.brandName;
  const website = req.body.website;
  if (brandName && website) {
    const brandData = new Brands({
      brandName,
      website
    });
    brandData
      .save()
      .then(() => res.json('Brand has been added !!'))
      .catch(err => res.status(400).json('Error : ' + err));
  } else {
    res.json('All fields are required !!');
  }
});

// DELETE
router.delete('/:id', (req, res) => {
  Brands.findById(req.params.id)
    .then(brand =>
      brand
        .remove()
        .then(() =>
          res.json(`Brand with id ${req.params.id} has been removed!!`)
        )
        .catch(err => res.status(400).json('Error: ' + err))
    )
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
