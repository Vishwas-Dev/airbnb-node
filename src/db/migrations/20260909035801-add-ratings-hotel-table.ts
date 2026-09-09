import { queryInterface } from "sequelize";
module.exports = {
  async up (queryInterface : queryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE hotels
      ADD COLUMN rating DECIMAL(3,2) DEFAULT NULL,
      ADD COLUMN rating_count INT DEFUALT NULL
    )
  },

  async down (queryInterface : queryInterface ) {
    await queryInterface.sequelize.query(`
      ALTER TABLE hotels
      DROP COLUMN rating,
      DROP COLUMN rating_count
    )
  }
};
