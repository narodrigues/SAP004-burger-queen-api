'use strict';
module.exports = (sequelize, DataTypes) => {
  const products_order = sequelize.define('products_order', {
    name: DataTypes.STRING,
    count: DataTypes.INTEGER,
    menu_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER
  }, {});
  products_order.associate = function(models) {
    products_order.belongsTo(models.menu)
    products_order.belongsTo(models.orders)
    // associations can be defined here
  };
  return products_order;
};