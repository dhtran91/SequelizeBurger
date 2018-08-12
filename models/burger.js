module.exports = function(sequelize, DataTypes) {
  let Burger = sequelize.define("Burgers", {
    burger_name: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    
  return Burger;
};