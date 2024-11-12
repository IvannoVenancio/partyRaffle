const express = require('express')
const indexRoutes = express.Router()
const GuestController = require('../controllers/GuestController')
const ListController = require('../controllers/ListController')


indexRoutes.get('/', GuestController.home)
indexRoutes.get('/:guestId', GuestController.home)
indexRoutes.post('/guest', GuestController.create)
indexRoutes.get('/guest', GuestController.view)
indexRoutes.get('/result', GuestController.resultSorteio)
indexRoutes.get('/result/:id', GuestController.sorteadoById)
indexRoutes.get('/result/:guestId', GuestController.sorteadoByGuestId)
indexRoutes.get('/sorteio', GuestController.realizarSorteio)
indexRoutes.post('/list', ListController.create)
indexRoutes.get('/list', ListController.view)


module.exports = indexRoutes;

