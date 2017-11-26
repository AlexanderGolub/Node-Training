'use strict';

const defaultUsersList = [
  {name: 'The Good', login: 'user1', email: 'someGood@body.com', password: '12345', createdAt: new Date(), updatedAt: new Date()},
  {name: 'The Bad', login: 'user2', email: 'someBad@body.com', password: '12345', createdAt: new Date(), updatedAt: new Date()},
  {name: 'The Ugly', login: 'user3', email: 'someUgly@body.com', password: '12345', createdAt: new Date(), updatedAt: new Date()},
];

const defaultProductsList = [
  {name: 'product1', createdAt: new Date(), updatedAt: new Date()},
  {name: 'product2', createdAt: new Date(), updatedAt: new Date()},
  {name: 'product3', createdAt: new Date(), updatedAt: new Date()},
  {name: 'product4', createdAt: new Date(), updatedAt: new Date()},
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    const usersPopulation = queryInterface.bulkInsert('Users', defaultUsersList, {});
    const productsPopulation = queryInterface.bulkInsert('Products', defaultProductsList, {});

    return Promise.all([
      usersPopulation,
      productsPopulation
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.resolve('Hey ya');
  }
};
