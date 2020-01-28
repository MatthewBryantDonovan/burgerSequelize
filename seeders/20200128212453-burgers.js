'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      return queryInterface.bulkInsert('burger', [{
        burger_name: 'Foot Feta-ish Burger',
        eaten: false,
        createdAt : Date.now(),
        updatedAt : Date.now()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      // return queryInterface.bulkDelete('burgers', null, {});
    
  }
};
