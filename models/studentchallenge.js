'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class StudentChallenge extends Model {}

  StudentChallenge.init({
    StudentId: DataTypes.INTEGER,
    ChallengeId: DataTypes.INTEGER,
    isComplete: DataTypes.BOOLEAN
  }, { sequelize });

  StudentChallenge.associate = function(models) {
    StudentChallenge.belongsTo(models.Student)
    StudentChallenge.belongsTo(models.Challenge)
  };
  return StudentChallenge;
};