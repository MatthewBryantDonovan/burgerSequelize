'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      return queryInterface.bulkInsert('burgers', [
        {
        burger_name: 'Foot Feta-ish Burger',
        eaten: false,
        createdAt : new Date(),
        updatedAt : new Date()
        },
        {
        burger_name: 'Rest in Peas Burger',
        eaten: false,
        createdAt : new Date(),
        updatedAt : new Date()
        },
        {
        burger_name: 'Mission A-Corn-Plished Burger',
        eaten: false,
        createdAt : new Date(),
        updatedAt : new Date()
        },
        {
        burger_name: 'Tunami',
        eaten: true,
        createdAt : new Date(),
        updatedAt : new Date()
        },
        {
        burger_name: 'Foot Feta-ish Burger',
        eaten: true,
        createdAt : new Date(),
        updatedAt : new Date()
        },
        {
        burger_name: 'New Bacon-ings',
        eaten: true,
        createdAt : new Date(),
        updatedAt : new Date()
        },

    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      return queryInterface.bulkDelete('burgers', [{
        burger_name : 'Foot Feta-ish Burger'
      }]);
  }
};