const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DailySale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }
  DailySale.init({
    item_id: DataTypes.STRING,
    quantity_sold: DataTypes.INTEGER,
    total_amount: DataTypes.INTEGER,
    collected_amount: DataTypes.INTEGER,
    debt: DataTypes.INTEGER,
    loss: DataTypes.INTEGER,
    paid_debt: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DailySale',
  });
  return DailySale;
};
