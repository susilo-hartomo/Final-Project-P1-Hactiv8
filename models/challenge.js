'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Challenge extends Model {}

  Challenge.init({
    name: DataTypes.STRING,
    deadline: DataTypes.DATEONLY
  }, { sequelize });
  
  Challenge.associate = function(models) {
    Challenge.hasMany(models.StudentChallenge)
    Challenge.belongsToMany(models.Student, { through: 'StudentChallenge', foreignKey: 'ChallengeId' })
  };
  return Challenge;
};