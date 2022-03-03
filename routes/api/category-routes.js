const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Category, Product } = require('../../models');

// find all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    })
    res.status(200).json(categories)
  } catch (err) {
    res.status(500).json(err)
  }
});

// get one category
router.get('/:id', async (req, res) => {
  try {
    const categories = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!categories) {
      res.status(404).json({ message: 'No categories found with that id' })
    }
    res.status(200).json(products)
  } catch (err) {
    res.status(500).json(err)
  }
});

  // create a new category
router.post('/', async (req, res) => {
  Category.create(req.body)
  .then((category) => res.status(200).json(category))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

  // update a category by its `id` value
router.put('/:id', (req, res) => {
Category.update(req.body, {
  where: {
    id: req.params.id,
  },
})
// .then((category) => {
//   return Product.findAll({ where: { category_id: req.params.id }})
// })
// .then((products) => {
//   // get list of current product_ids
//   const productIds = products.map(({ category_id }) => category_id);
//   // create filtered list of new tag_ids
//   const newProductTags = req.body.tagIds
//     .filter((category_id) => !productIds.includes(category_id))
//     .map((category_id) => {
//       return {
//         category_id: req.params.id,
//         product_id,
//       };
//     });
  
//   const productToRemove = products
//   .filter(({ category_id }) => !req.body.productIds.includes(category_id))
//   .map(({ id }) => id);
//   return Promise.all([
//     ProductTag.destroy({ where: { id: productToRemove } }),
//     ProductTag.bulkCreate(newProduct),
//   ]);
// })
});

  // delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(400).json({ message: 'No products found with that id' });
      return
    }

    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
