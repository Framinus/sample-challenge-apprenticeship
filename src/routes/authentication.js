import express from 'express'
import createUser from '../actions/signUp'
import validateUser from '../actions/signIn'

const router = express.Router()

// this route gets localhost:3000/authentication/sign-up
router.get('/sign-up', (req, res) => {
  res.render('authentication/sign-up')
})

// this route posts to localhost:3000/authentication/sign-up
router.post('/sign-up', (req, res) => {
  const {name, email, password} = req.body
  return createUser(name, email, password)
    .then((newUser) => {
      res.redirect('/')
    })
    .catch(console.error)
})

router.get('/sign-in', (req, res) => {
  res.render('authentication/sign-in', {msg: ''})
})

router.post('/sign-in', (req, res) => {
  const {email, password} = req.body
  return validateUser(email)
    .then((userInfo) => {
      if (userInfo.password === password) {
        req.session.user = userInfo.id
        req.session.name = userInfo.name
        req.session.email = userInfo.email
        res.redirect('/')
      } else {
        res.render('authentication/sign-in', {msg: 'Incorrect email or password'})
      }
    })
})

export default router
