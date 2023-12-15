const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const Thing = require('./models/things');

//configuration du serveur 
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, hostname, () => {
	console.log(`Serveur demarré sur http://${hostname}:${port}`);
});

//Configuration BDD Mongodb
mongoose.connect('mongodb+srv://etudiant:etudiant@express.s0avcaa.mongodb.net/')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  //Configuration Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views')); 


//Les routes 
app.use(bodyParser.json());
app.get('/create', (req, res) => {
res.render('../views/createTask');
});

app.get('/Todolist', (req, res) => {
  res.render('../views/Todolist');
  });

app.post('/create',  (req, res,) => {
 const objet = new Thing(req.body);

 objet.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});
 

module.exports = app;