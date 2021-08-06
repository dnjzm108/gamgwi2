const Sequelize = require('sequelize')
const moment = require('moment')

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            userIdx:{
                type:Sequelize.STRING(10),
                allowNull:true
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
   

}