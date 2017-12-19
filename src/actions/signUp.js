import db from '../db/index'

const createUser = (name, email, password) => {
  return db.one(`INSERT INTO users (name, email, password)
  VALUES($1, $2, $3)
  RETURNING *`, [name, email, password])
}

export default createUser
