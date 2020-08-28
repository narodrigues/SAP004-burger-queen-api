'use strict';
module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define('menu', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER(10,2),
    has_extras: DataTypes.BOOLEAN,
    is_burger: DataTypes.BOOLEAN
  }, {});
  menu.associate = function(models) {
    // associations can be defined here
    menu.hasMany(models.products_order)
  };
  return menu;
};