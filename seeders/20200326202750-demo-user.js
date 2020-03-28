'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const listUser = [
      {
        username: 'abdmhamzah',
        password: 'bismillah',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        username: 'susilo',
        password: 'hartomo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('Users', listUser, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
