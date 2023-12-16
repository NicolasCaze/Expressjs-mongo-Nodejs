const express = require('express');
const router = express.Router();
const ThingCtrl = require('../controllers/things');

//Ajout d'un objet 
router.get('/', ThingCtrl.AllThing);

//Information d'un objet 
router.get('/object/:id', ThingCtrl.OneThing);

//Information de tous les objets
router.post('/add', ThingCtrl.createThing);

//Modifier un objet
router.put('/edit/:id', ThingCtrl.EditThing);

//Supprimer un objet
router.delete('/delete/:id', ThingCtrl.Delete);

module.exports = router;