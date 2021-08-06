'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const Weather = require('./weather.js')
const Board = require('./board.js')
const Comment = require('./comment.js')
const User = require('./user.js')
const Like = require('./like.js')
const BackgroundImg = require('./backgroundImg')


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Weather = Weather
db.Comment = Comment
db.User = User
db.Board = Board
db.Link = Like
db.BackgroundImg = BackgroundImg

db.sequelize = sequelize;
db.Sequelize = Sequelize;

Comment.init(sequelize)
User.init(sequelize)
Board.init(sequelize)
Weather.init(sequelize)
Like.init(sequelize)
BackgroundImg.init(sequelize)

module.exports = db;
