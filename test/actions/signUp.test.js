import '../env'
import { expect } from 'chai';
import createUser from '../../src/actions/signUp'

describe('function signUp ', () => {
  it('should create a new row in the users table', () => {
    return createUser('mary', 'm@m.com', 'mary')
      .then((newUser) => {
        expect(newUser.name).to.equal('mary')
        expect(newUser.email).to.equal('m@m.com')
        expect(newUser.password).to.equal('mary')
      })
  })
})
