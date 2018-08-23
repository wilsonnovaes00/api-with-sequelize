const db = require('../config/db.config.js');
const Team = db.team;

exports.create = (req, res) => {	
	Team.create({  
	  nameTeam: req.body.nameTeam
	}).then(team => {		
		res.send(team);
	});
};
 
exports.findAll = (req, res) => {
	Team.findAll().then(team => {
	  res.send(team);
	});
};
 
exports.findById = (req, res) => {	
	Team.findById(req.params.teamId).then(team => {
		res.send(team);
	})
};
 
exports.update = (req, res) => {
	const id = req.params.teamId;
	Team.update( { nameTeam: req.body.nameTeam }, 
					 { where: {id: req.params.teamId} }
				   ).then(() => {
					 res.status(200).send("updated successfully a team with id = " + id);
				   });
};
 
exports.delete = (req, res) => {
	const id = req.params.teamId;
	Team.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a team with id = ' + id);
	});
};
