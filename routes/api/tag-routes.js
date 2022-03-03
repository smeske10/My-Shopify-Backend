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
  Tag.create(req.body)
    .then((tag) => {
      if (req.body.tag_name) {
        const productTagIdArr = req.body.tag_name.map((tag_name) => {
          return {
            tag_name
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((tag) => {
    return ProductTag.findAll({ where: { product_id: req.params.id } });
  })
  .then((productTags) => {
    // get list of current product_ids
    const productTagIds = productTags.map(({ product_id }) => product_id);

    // create filtered list of new product_ids
    const newProductTags = req.body.productIds
        .filter((product_id) => !productTagIds.includes(product_id))
        .map((product_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
        // figure out which ones to remove
      const productTagsToRemove = productTags
      .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
      .map(({ id }) => id);

    // run both actions
    return Promise.all([
      ProductTag.destroy({ where: { id: productTagsToRemove } }),
      ProductTag.bulkCreate(newProductTags),
    ]);
  })
  .then((updatedProductTags) => res.json(updatedProductTags))
  .catch((err) => res.status(400).json(err))
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const TagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!TagData) {
      res.status(400).json({ message: 'No products found with that id' });
      return
    }
    res.status(200).json(productData)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
