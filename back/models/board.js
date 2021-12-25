const Sequelize = require('sequelize')
const moment = require('moment')

module.exports = class Board extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            id:{
                type:Sequelize.INTEGER,
                autoIncrement:true,
                primaryKey:true,
                unique:true,
                comment:'고유번호'
            },
            title:{
                type:Sequelize.STRING(30),
                allowNull:false
            },
            date:{
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW,
                get:function(){
                    return moment(this.getDataValue('date')).format('YYYY-MM-DD-hh-mm-dd')
                }                
            },
            nickName:{
                type:Sequelize.STRING(20),
                allowNull:false,
            },
            hit:{
                type:Sequelize.INTEGER,
                allowNull:false,
                defaultValue:0
            },
            likeIdx:{
                type:Sequelize.INTEGER,
                allowNull:false,
                defaultValue:0,
                comment:'좋아요'
            },
            content:{
                type:Sequelize.STRING(300),
                allowNull:true
            },
            report:{
                type:Sequelize.BOOLEAN,
                allowNull:false,
                defaultValue:0,
                comment:'신고'
            },
            watch:{
                type:Sequelize.BOOLEAN,
                allowNull:false,
                defaultValue:0,
                comment:'공개비공개여부 0=공개 1=비공개'
            },
            category:{
                type:Sequelize.STRING(20),
                allowNull:true,
            },
            emo_idx:{
                type:Sequelize.INTEGER,
                allowNull:true,
                comment:'날씨이모티콘idx'
            },
            backgroundImgIdx:{
                type:Sequelize.INTEGER,
                allowNull:true,
            },
            font:{
                type:Sequelize.TEXT,
                allowNull:true,
            },
            fontColor:{
                type:Sequelize.STRING(50),
                allowNull:true,
            },
            weatherIdx:{
                type:Sequelize.INTEGER,
                allowNull:true,
            },
            weather:{
                type:Sequelize.STRING(20),
                allowNull:false

            }
        },{
            sequelize,
            timestamps:true,
            modelName:'Board',
            tableName:'boards',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
   static associate(db){
       db.Board.hasMany(db.Comment,{foreignKey:'titleIdx',sourceKey:'id'}),
       db.Board.belongsTo(db.BackgroundImg,{foreignKey:'backgroundImgIdx',targetKey:'id'})
       db.Board.belongsTo(db.Weather,{foreignKey:'weatherIdx',targetKey:'id'}),
       db.Board.hasMany(db.Like,{foreignKey:'board_id',sourceKey:'id'})
   }
}
