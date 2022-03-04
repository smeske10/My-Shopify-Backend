const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Tag, Product, ProductTag } = require('../../models');
const { beforeBulkDestroy } = require('../../models/Product');

// get all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product }]
    })
    res.status(200).json(tags)
  } catch (err) {
    res.status(500).json(err)
  }
});

// get one tag
router.get('/:id', async (req, res) => {
  try {
    const tags = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    })
    if (!tags) {
      res.status(404).json({ message: 'No tags found with that id' })
    }
    res.status(200).json(tags)
  } catch (err) {
    res.status(500).json(err)
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    Tag.create(req.body)
    res.status(200).json(product);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findOne({
      where: {
        id: req.params.id,
      },
    })
    await tagData.update(req.body)
    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.findOne({
      where: {
        id: req.params.id
      }
    });
    await tagData.destroy();
    if (!tagData) {
      res.status(400).json({ message: 'No products found with that id' });
      return
    }
    res.status(200).json(productData)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
