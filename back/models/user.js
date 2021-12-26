const Sequelize = require('sequelize')
const moment = require('moment')

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            userIdx:{
                type:Sequelize.INTEGER,
                autoIncrement:true,
                primaryKey:true,
                unique:true
            },
            userpw:{
                type:Sequelize.STRING(30),
                allowNull:false,
            },
            userid:{
                type:Sequelize.STRING(30),
                unique:true,
                allowNull:false,
            },
        },{
            sequelize,
            timestamps:false,
            modelName:'User',
            tableName:'user',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.User.hasMany(db.Like,{foreignKey:'userid',sourceKey:'userid'})
        db.User.hasMany(db.Comment,{foreignKey:'commenter_name',sourceKey:'userid'})
        db.User.hasMany(db.Subscribe,{foreignKey:'userid',sourceKey:'userid'})
    }

   

}