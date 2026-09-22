

import { DataTypes, QueryInterface } from "sequelize";

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.addColumn('hotels', 'deleted_at', {
      type: DataTypes.DATE,
      defaultValue: null,
      allowNull: true,
    })
  },

  async down (queryInterface: QueryInterface) {
   queryInterface.removeColumn('hotels', 'deleted_at');
  },
};
