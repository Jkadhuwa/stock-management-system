module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});
  Product.associate = () => {
    // associations can be defined here
  };
  return Product;
};
