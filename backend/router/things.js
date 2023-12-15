const express = require('express');
const router = express.Router();
const ThingCtrl = require('../controllers/things');

//Ajout d'un objet 
router.post('/', ThingCtrl.createThing);

//Information d'un objet 
router.get('/Oneobject/:id', ThingCtrl.OneThing);

//Information de tous les objets
router.get('/Allobject', ThingCtrl.AllThing);

//Modifier un objet
router.put('/Editobject/:id', ThingCtrl.EditThing);

//Supprimer un objet
router.delete('/Delete/:id', ThingCtrl.Delete);

module.exports = router;