const express = require('express');
const router = express.Router();
const Categories = require('../models/Categories');

// READ
router.get('/', (req, res) => {
  Categories.find()
    .then(category => res.json(category))
    .catch(err => res.status(400).json('Error: ' + err));
});

// CREATE
router.post('/', (req, res) => {
  const categoryName = req.body.categoryName;
  if (categoryName) {
    const categoryData = new Categories({ categoryName });
    categoryData
      .save()
      .then(() => res.json('Category has been saved !!'))
      .catch(err => res.status(400).json('Error: ' + err));
  }
});

// DELETE
router.delete('/:id', (req, res) => {
  Categories.findById(req.params.id)
    .then(category =>
      category
        .remove()
        .then(() => res.json(`Category with id ${req.params.id} has been removed`))
        .catch(err => res.status(400).json('Error: ' + err))
    )
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
