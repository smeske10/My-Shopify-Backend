const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { beforeBulkDestroy } = require('../../models/Product');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
    Tag.findAll().then((tagData) => {
      res.json(tagData)
    })
    ProductTag.findAll().then((productTagData) => {
      res.json(productTagData)
    })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

});

router.post('/', (req, res) => {
  // create a new tag

});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value

});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  
});

module.exports = router;
