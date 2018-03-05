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