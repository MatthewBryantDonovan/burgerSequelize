'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      return queryInterface.bulkInsert('customers', [
        {
        customer_name: 'Tina',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        customer_name: 'Gene',
        createdAt: new Date(),
        updatedAt: new Date()
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

       return queryInterface.bulkDelete('customers', [{}]);
  }
};
