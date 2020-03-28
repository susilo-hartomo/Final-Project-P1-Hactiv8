'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const listStudent = [
      {
        first_name: 'Hamzah',
        last_name: 'Abdullah',
        gender: 'male',
        email: 'hamzah@mail.com',
        birth_date: '28 April 1992',
        BuddyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Susilo',
        last_name: 'Dinomo',
        gender: 'male',
        email: 'susilo@mail.com',
        birth_date: '18 April 1992',
        BuddyId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('Students', listStudent, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
