export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DailySales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item_id: {
        type: Sequelize.STRING
      },
      quantity_sold: {
        type: Sequelize.INTEGER
      },
      total_amount: {
        type: Sequelize.INTEGER
      },
      collected_amount: {
        type: Sequelize.INTEGER
      },
      debt: {
        type: Sequelize.INTEGER
      },
      loss: {
        type: Sequelize.INTEGER
      },
      paid_debt: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('DailySales');
  }
};
