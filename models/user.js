'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static get() {
      return this.findAll({
        attributes: ['id', 'name'],
      });    
    }
    
    static add(name) {
      return this.create({ name });
    }
  }
  User.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};