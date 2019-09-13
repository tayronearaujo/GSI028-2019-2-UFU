const Sequelize = require('sequelize')
const db ={}

//nome do banco - user - senha - objeto json
const sequelize = new  Sequelize ('pvp_game','root','', {
    host: "localhost",
    dialect:'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conectado Ao banco com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+ erro)
})


db.sequelize = sequelize
db.sequelize = sequelize

module.exports = db




