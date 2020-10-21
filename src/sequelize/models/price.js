const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }
  Price.init({
    item_id: DataTypes.INTEGER,
    buying_price: DataTypes.INTEGER,
    selling_price: DataTypes.INTEGER,
    profit_per_item: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Price',
  });
  return Price;
};
