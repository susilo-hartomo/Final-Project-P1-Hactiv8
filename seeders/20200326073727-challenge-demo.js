'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const listChallenge = [
      {
        name: 'Sudoku',
        deadline: '2020-03-28',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Battleship',
        deadline: '2020-03-28',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('Challenges', listChallenge, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Challenges', null, {});
  }
};
