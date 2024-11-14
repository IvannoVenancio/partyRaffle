const express = require('express')
const indexRoutes = express.Router()
const GuestController = require('../controllers/GuestController')
const ListController = require('../controllers/ListController')


indexRoutes.get('/', GuestController.home)
indexRoutes.get('/:guestId', GuestController.home)
indexRoutes.post('/back/guest', GuestController.create)
indexRoutes.post('/back/guest/:id', GuestController.delete)
indexRoutes.get('/back/guest', GuestController.view)
indexRoutes.get('/back/result', GuestController.resultSorteio)
//indexRoutes.get('/result/:id', GuestController.sorteadoById)
indexRoutes.get('/result/:guestId', GuestController.sorteadoByGuestId)
indexRoutes.post('/back/sorteio', GuestController.realizarSorteio)
indexRoutes.post('/back/list', ListController.create)
indexRoutes.get('/back/list', ListController.view)
indexRoutes.post('/back/list/:id', ListController.delete)


module.exports = indexRoutes;

