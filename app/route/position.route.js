module.exports = function(app) {
 
    const position = require('../controller/position.controller.js');
 
    // Create a new player
    app.post('/api/positions', position.create);
 
    // Retrieve all player
    app.get('/api/positions', position.findAll);
 
    // Retrieve a single Player by Id
    app.get('/api/positions/:positionId', position.findById);
 
    // Update a player with Id
    app.put('/api/positions/:positionId', position.update);
 
    // Delete a player with Id
    app.delete('/api/positions/:positionId', position.delete);
}
