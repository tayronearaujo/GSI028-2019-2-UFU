const express = require ('express');
const cors = require ('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_USERS_QUERY = 'SELECT * FROM usuario';

const connection = mysql.createConnection({
    host: 'localhost' ,
    user: 'root',
    password: '',
    database: 'pvp_game'
});


connection.connect(err => {
    if (err) 
        return err;
})


//console.log(connection);


app.use (cors());

app.get('/', (req , res) =>{
    res.send('Conectado')
});



//Retorna a query do da seção  
app.get('/user', (req, res) => {
    connection.query(SELECT_ALL_USERS_QUERY, (err, results) =>{

        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                User: results
            })
        }
    });
});



app.listen (4000, () => {
    console.log(`Server on`)
})