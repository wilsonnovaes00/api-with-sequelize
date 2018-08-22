const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.players = require('../models/player.model.js')(sequelize, Sequelize);
db.teams = require('../models/team.model.js')(sequelize, Sequelize);
db.positions = require('../models/position.model.js')(sequelize, Sequelize);
 
 
module.exports = db;
