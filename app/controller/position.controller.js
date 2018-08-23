const db = require('../config/db.config.js');
const Position = db.position;
 
exports.create = (req, res) => {	
	Position.create({  
	  position: req.body.position
	}).then(positon => {		
		res.send(positon);
	});
};
 
exports.findAll = (req, res) => {
	Position.findAll().then(positions => {
	  res.send(positions);
	});
};
 
exports.findById = (req, res) => {	
	Position.findById(req.params.positonId).then(position => {
		res.send(position);
	})
};
 
exports.update = (req, res) => {
	const id = req.params.positionId;
	Position.update( { position: req.body.position }, 
					 { where: {id: req.params.positionId} }
				   ).then(() => {
					 res.status(200).send("updated successfully a position with id = " + id);
				   });
};
 
exports.delete = (req, res) => {
	const id = req.params.positionId;
	Position.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a position with id = ' + id);
	});
};
