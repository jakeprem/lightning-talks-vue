export default class BaseModel {
  __contract__ = []

  constructor (contract) {
    this.__contract__ = contract
  }

  validate (model) {
    let isValid = false
    return new Promise((resolve, reject) => {
      if (this.__contract__ instanceof Array) {
        isValid = this.__contract__.every(
          item => {
            return model.hasOwnProperty(item)
          }
        )
      }
      if (isValid) {
        resolve(model)
      }
      reject(new Error('Rejection reasons'))
    })
  }

  default () {
    if (this.__contract__ instanceof Array) {
      let obj = {}
      this.__contract__.forEach(prop => {
        // This is a bad way to do this.
        // It should be handled by using an object
        // with defaults specified for the contract
        if (prop.includes('datetime')) {
          obj[prop] = new Date()
        } else {
          obj[prop] = ''
        }
      })
      return obj
    }
  }
}

/**
 * The goal is for you to be able to do something like
 * Model.validate(model)
 * .then(model => return Model.persist(model))
 * .then(successFunction)
 * .catch(errorFunction)
 */

/**
  * Additional work on this module would be to add support
  * for more complex contracts, including object based
  * contracts with properties and datatypes, as well
  * as default values, etc.
*/
