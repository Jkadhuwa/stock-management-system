const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class IncomingStock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }
  IncomingStock.init({
    item_id: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    buying_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'IncomingStock',
  });
  return IncomingStock;
};
