const Sequelize = require('sequelize')

module.exports = class Weather extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            id:{
                type:Sequelize.INTEGER,
                allowNull:true,
                unique:true,
                primaryKey:true,
            },
            emoTitle:{
                type:Sequelize.TEXT,
                allowNull:true
            },
            emoView:{
                type:Sequelize.STRING(100),
                unique:true,
                allowNull:false,
                comment:'이모티콘저장'
            },        
        },{
            sequelize,
            timestamps:false,
            modelName:'Weather',
            tableName:'weathers',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.Weather.hasMany(db.Board,{foreignKey:'weatherIdx',sourcekey:'id'})
    }
}