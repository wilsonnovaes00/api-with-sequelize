const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
 
const db = require('./config/db.config.js');
  
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
});
 
require('./route/player.route.js')(app);
require('./route/team.route.js')(app);
require('./route/position.route.js')(app);

 
const server = app.listen(8081, function () {
 
  const host = server.address().address
  const port = server.address().port
 
  console.log("Server Running in localhost:", host, port)
})