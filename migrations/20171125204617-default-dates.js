'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const updateCreatedAt = queryInterface.changeColumn(
      'Users',
      'createdAt',
      {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
      }
    );

    const updateUpdatedAt = queryInterface.changeColumn(
      'Users',
      'updatedAt',
      {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
      }
    );

    return Promise.all([
      updateCreatedAt,
      updateUpdatedAt
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.resolve('Bless you');
  }
};
