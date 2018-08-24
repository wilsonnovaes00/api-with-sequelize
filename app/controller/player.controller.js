const db = require('../config/db.config.js');
const Player = db.player;
 
exports.create = (req, res) => {	
	Player.create({  
	  firstname: req.body.firstname,
	  lastname: req.body.lastname,
		age: req.body.age,
		team_id: req.body.team_id,
		position_id: req.body.position_id
	}).then(player => {		
		res.send(player);
	});
};
 
exports.findAll = (req, res) => {
	Player.findAll({
		include: [{ model: db.position},{ model: db.team, attributes: [nameTeam] }]

	}).then(players => {
	  res.send(players);
	});
};
 
exports.findById = (req, res) => {	
	Player.findById(
		req.params.playerId, {
		include: [
			{
				model: db.team,
				attributes: ['nameTeam'],
			}
		]}
	).then(player => {
		res.send(player);
	})
};
 
exports.update = (req, res) => {
	const id = req.params.playerId;
	Player.update( { firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age, team_id: req.body.team_id, position_id: req.body.position_id }, 
					 { where: {id: req.params.playerId} }
				   ).then(() => {
					 res.status(200).send("updated successfully a player with id = " + id);
				   });
};
 
exports.delete = (req, res) => {
	const id = req.params.playerId;
	Player.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a player with id = ' + id);
	});
};
