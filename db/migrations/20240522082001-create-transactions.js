"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Transactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      member_id: {
        type: Sequelize.INTEGER,
      },
      book_id: {
        type: Sequelize.INTEGER,
      },
      status_penalty: {
        type: Sequelize.INTEGER,
      },
      date_borrowed: {
        type: Sequelize.DATE,
      },
      date_returned: {
        type: Sequelize.DATE,
      },
      status_pinjam: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Transactions");
  },
};
