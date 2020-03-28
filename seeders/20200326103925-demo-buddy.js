'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const listBuddy = [
      {
        first_name: 'Muhammad',
        last_name: 'Yusuf',
        gender: 'male',
        email: 'yusuf@mail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Willy',
        last_name: 'Santoso',
        gender: 'male',
        email: 'willy@mail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
    return queryInterface.bulkInsert('Buddies', listBuddy, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Buddies', null, {});
  }
};
