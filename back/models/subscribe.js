const Sequelize = require('sequelize');

module.exports = class Subscribe extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            writer_name:{
                type:Sequelize.STRING(20),
                allowNull:false,
                commnet:'구독한 사람의 닉네임'
            },
            status:{
                type:Sequelize.BOOLEAN,
                defaultValue:false,
                comment:'둘다 연결되었는지 여부, 0이면 나만 구독 중, 1이면 서로 구독중'
            },
        },{
            sequelize,
            timestamps:false,
            modelName:'Subscribe',
            tableName:'subscribes',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.Subscribe.belongsTo(db.User,{foreignKey:'userid',targetKey:'userid'})
    }
}