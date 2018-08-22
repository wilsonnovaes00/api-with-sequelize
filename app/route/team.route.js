module.exports = function(app) {
 
    const team = require('../controller/team.controller.js');
 
    // Create a new team
    app.post('/api/teams', team.create);
 
    // Retrieve all team
    app.get('/api/teams', team.findAll);
 
    // Retrieve a single team by Id
    app.get('/api/teams/:teamId', team.findById);
 
    // Update a team with Id
    app.put('/api/teams/:teamId', team.update);
 
    // Delete a team with Id
    app.delete('/api/teams/:teamId', team.delete);
}
