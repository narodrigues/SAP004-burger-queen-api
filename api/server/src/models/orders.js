'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    active: DataTypes.BOOLEAN,
    client: DataTypes.STRING,
    table: DataTypes.INTEGER
  }, {});
  orders.associate = function(models) {
    // associations can be defined here
    orders.hasMany(models.products_order)
  };
  return orders;
};