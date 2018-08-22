module.exports = (sequelize, Sequelize) => {
	const Player = sequelize.define('player', {
	  firstname: {
		type: Sequelize.STRING
	  },
	  lastname: {
		type: Sequelize.STRING
	  },
	  age: {
		  type: Sequelize.INTEGER
	  }
	});
	
	return Player;
}
