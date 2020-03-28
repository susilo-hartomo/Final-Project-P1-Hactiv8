'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Student extends Model {

    getFullName(){
      return `${this.first_name} ${this.last_name}`
    }
    
  }

  Student.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    birth_date: DataTypes.DATEONLY,
    BuddyId: DataTypes.INTEGER
  }, { sequelize });
  
  Student.associate = function(models) {
    Student.belongsTo(models.Buddy)
    Student.hasMany(models.StudentChallenge)
    Student.belongsToMany(models.Challenge, { through: 'StudentChallenge', foreignKey: 'StudentId' })
  };
  return Student;
};