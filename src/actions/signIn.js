import db from '../db/index'

const validateUser = (email) => {
  return db.one(`SELECT * FROM users
    WHERE email=$1`, email)
}

export default validateUser
