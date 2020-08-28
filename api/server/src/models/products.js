'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    count: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    is_burger: DataTypes.STRING,
    has_cheese: DataTypes.BOOLEAN,
    has_egg: DataTypes.BOOLEAN
  }, {});
  Products.associate = function(models) {
    // associations can be defined here
  };
  return Products;
};