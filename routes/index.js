const express = require('express')
const indexRoutes = express.Router()
const GuestController = require('../controllers/GuestController')
const ListController = require('../controllers/ListController')


indexRoutes.get('/guest', GuestController.view)
indexRoutes.post('/guest', GuestController.create)
indexRoutes.post('/sorteio', GuestController.realizarSorteio)
indexRoutes.get('/sorteio', GuestController.viewSorteados)
indexRoutes.get('/result/:id', GuestController.sorteadoById)
indexRoutes.post('/list', ListController.create)
indexRoutes.get('/', ListController.view)
indexRoutes.get('/raffle/:id', GuestController.landingSorteio)

module.exports = indexRoutes;

