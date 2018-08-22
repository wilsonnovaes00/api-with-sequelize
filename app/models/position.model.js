module.exports = (sequelize, Sequelize) => {
	const Position = sequelize.define('position', {
	  position: {
		type: Sequelize.STRING
	  }
	});
	
	return Position;
}
