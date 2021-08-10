const Sequelize = require('sequelize')
const moment = require('moment')

module.exports = class BackgroundImg extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            id:{
                type:Sequelize.INTEGER,
                allowNull:true,
                unique:true,
                primaryKey:true,
            },
            img:{
                type:Sequelize.TEXT,
                allowNull:true
            },
            imgTitle:{
                type:Sequelize.STRING(50),
                allowNull:true
            },
        },{
            sequelize,
            timestamps:false,
            modelName:'',
            tableName:'backgroundImgs',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate (db){
        db.BackgroundImg.hasMany(db.Board,{foreignKey:'backgroundImgIdx',sourceKey:'id'})
    }
}
