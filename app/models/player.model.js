module.exports = (sequelize, Sequelize) => {
	const Player = sequelize.define('player', {
	  firstname: {
			type: Sequelize.STRING,
			allowNull: false
	  },
	  lastname: {
			type: Sequelize.STRING,
			allowNull: false
	  },
	  age: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		team_id: {
			type : Sequelize.INTEGER,
			allowNull: false
		},
		position_id: {
			type: Sequelize.INTEGER,
			allowNull: false
		}
	});

	Player.associate = (models) => {
    	Player.belongsTo(models.team, {
			foreignKey: 'team_id',
			as: 'team'
    	});
	};

	Player.associate = (models) => {
    	Player.belongsTo(models.position, {
			foreignKey: 'position_id',
    	});
	};


	return Player;
}
