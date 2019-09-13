
//Referencia da minha tabela para o sequelize
const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = (sequelize) => {
    const User = sequelize.define( 'usuarios', {
        
        user_id:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name_user:{
            type: Sequelize.STRING

        },
        email:{
            type: Sequelize.STRING
                
        },
        password_user:{
            type: Sequelize.STRING
                
        }
    });
    return User;
}
    


module.exports = db