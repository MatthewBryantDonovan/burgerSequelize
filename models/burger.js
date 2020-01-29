'use strict';
module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define('Burger', {
    burger_name: DataTypes.STRING,
    eaten: DataTypes.BOOLEAN
  }, {});
  Burger.associate = function(models) {
    // associations can be defined here
    Burger.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Burger;
};