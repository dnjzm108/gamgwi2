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
const Subscribe = require('./subscribe')


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.Weather = Weather
db.Comment = Comment
db.User = User
db.Board = Board
db.Like = Like
db.BackgroundImg = BackgroundImg
db.Subscribe = Subscribe

db.sequelize = sequelize;
db.Sequelize = Sequelize;

Comment.init(sequelize)
User.init(sequelize)
Board.init(sequelize)
Weather.init(sequelize)
Like.init(sequelize)
BackgroundImg.init(sequelize)
Subscribe.init(sequelize)


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

/*
// 관계설정이 되지 않았던 이유===========================================
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
위의 코드가 처음에 db.Weather = Weather ... 의 코드 위에 있어서 db가 비어있는 상태로 실행되어 테이블간 관계설정이 되지 않았던 것!! 
=> 그래서 위의 코드를 db에 테이블을 담은 다음인 그 아래에 내려주어 관계설정을 함
*/ 


module.exports = db;
