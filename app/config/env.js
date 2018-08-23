const env = {
    database: 'testdb',
    username: 'sa',
    password: 'P@55w0rd',
    host: 'localhost',
    dialectModulePath: 'sequelize-msnodesqlv8',
    dialect: 'mssql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  };
   
  module.exports = env;
