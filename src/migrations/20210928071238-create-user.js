'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "username"
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "user@gmail.com"
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "userpass"
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "default-avatar.png"
      },
      verifiedToken: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "123"
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      isApproved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: -123456432
      },
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: -123456432
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};