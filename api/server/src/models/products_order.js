'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products_order = sequelize.define('Products_order', {
    name: DataTypes.STRING,
    count: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    is_burger: DataTypes.STRING,
    has_cheese: DataTypes.BOOLEAN,
    has_egg: DataTypes.BOOLEAN
  }, {});
  Products_order.associate = function(models) {
    // associations can be defined here
  };
  return Products_order;
};