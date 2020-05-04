const routes = require('express').Router()

const SessionController = require('./controllers/SessionsController')

routes.post('/sessions', SessionController.store);

module.exports = routes;