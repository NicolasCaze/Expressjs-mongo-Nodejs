const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const RouteThings = require('./router/things');


app.use(bodyParser.urlencoded({ extended: true }));


//Configuration BDD Mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://etudiant:etudiant@express.s0avcaa.mongodb.net/')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  //Configuration Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views')); 


//Les routes 
app.use(bodyParser.json());

app.use('/api/things/', RouteThings);

app.get('/create', (req, res) => {
res.render('../views/createTask');
});

app.get('/Todolist', (req, res) => {
  res.render('../views/Todolist');
  });


module.exports = app;