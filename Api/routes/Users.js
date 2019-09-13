const express = require('express')
const users = express.Router()
const cors = require('cors')


const User = require('../models/User')
users.use(cors())

/*
users.post('/test', (req, res) => {
    //console.log('passou por aq')
    const userData = {
      name_user: req.body.name_user,
      email: req.body.email,
      password: req.body.password,
    }
      
})
*/

users.post('/register', (req, res) => {
  const name_user = req.body.name_user;
  const email = req.body.email;
  const password = req.body.password
  db.User.create({
    name_user: name_user,
    email: email,
    password: password
  })
    .then(newUser => {
      res.json(newUser);
    })
     //TODO bcrypt
  .then(user => {
    if (!user) {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        userData.password = hash
        User.create(userData)
          .then(user => {
            res.json({ status: user.email + 'Registered!' })
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      })
    } else {
      res.json({ error: 'User already exists' })
    }
  })
  .catch(err => {
    res.send('error: ' + err)
  })
});

 
module.exports = users