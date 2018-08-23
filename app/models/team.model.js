module.exports = (sequelize, Sequelize) => {
	const Team = sequelize.define('team', {
	  nameTeam: {
		type: Sequelize.STRING
	  }
	});

	return Team;
}