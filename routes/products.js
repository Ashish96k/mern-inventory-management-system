const express = require('express');
const router = express.Router();
const Products = require('../models/Products');

// READ
router.get('/', (req, res) => {
  Products.find()
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

// CREATE
router.post('/', (req, res) => {
  const productName = req.body.productName;
  const price = req.body.price;
  const brand = req.body.brand;
  const category = req.body.category;
  const description = req.body.description;

  if (productName && price && brand && category && description) {
    const productData = new Products({
      productName,
      price,
      brand,
      category,
      description
    });

    productData
      .save()
      .then(() => res.json('Product has been saved !!'))
      .catch(err => res.status(400).json('Error: ' + err));
  } else {
    res.json('All fields are mandatory !!');
  }
});

// DELETE
router.delete('/:id', (req, res) => {
  Products.findById(req.params.id)
    .then(product =>
      product
        .remove()
        .then(() =>
          res.json(`Product with id ${req.params.id} has been removed`)
        )
        .catch(err => res.status(400).json('Error: ' + err))
    )
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
