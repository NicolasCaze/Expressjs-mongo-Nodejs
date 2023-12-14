const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Thing = require('./models/things');
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.listen(port, hostname, () => {
	console.log(`Serveur demarré sur http://${hostname}:${port}`);
});

mongoose.connect('mongodb+srv://etudiant:etudiant@express.s0avcaa.mongodb.net/')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views')); 

app.get('/Todolist', (req, res) => {
  res.render('Todolist', { titre: 'Todolist' });
});


module.exports = app;