import express from 'express'

import albums from './albums'

import users from './users'

import authentication from './authentication'

const routes = express.Router()

routes.get('/', (req, res) => res.redirect('/albums'))

routes.use('/albums', albums)
routes.use('/authentication', authentication)
routes.use('/users', users)

export default routes
