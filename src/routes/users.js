import express from 'express'

const router = express.Router()

router.get('/:id', (req, res) => {
  const id = req.session.user
  const name = req.session.name
  const email = req.session.email
  res.render('users/profile', {id, name, email})
})

router.get('/:id/edit', (req, res) => {
  const id = req.session.user
  const name = req.session.name
  const email = req.session.email
  res.render('users/editprofile', {id, name, email})
})

// router.post('/:id', (req, res) => {
//
// })

export default router
