// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const seedProductTags = require('../seeds/product-tag-seeds');

// Products belongsTo Category
Product.belongsTo(Category)

// Categories have many Products
Category.hasMany(Product, {
  onDelete: 'CASCADE',
  hooks: true
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: 'ProductTag' })
Product.hasMany(ProductTag, {
  onDelete: 'CASCADE',
  hooks:true
})
ProductTag.belongsTo(Product)

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: 'ProductTag' })
Tag.hasMany(ProductTag, {
  onDelete: 'CASCADE',
  hooks:true
})
ProductTag.belongsTo(Tag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
