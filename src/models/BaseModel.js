export default class BaseModel {
  __contract__ = {}

  constructor(props) {
    Object.entries(props).forEach(
      ([key, value]) => {
        this[key] = value
      }
    )
  }

  isValid() {
    Object.entries(this.__contract__).every(
      ([key, value]) => {
        return this.hasOwnProperty(key)
      }
    )
  }

  get dataObject() {
    var returnObj = {}
    Object.entries(this.__contract__).forEach(
      ([key, value]) => {
        returnObj[key] = this[key]
      }
    )
    return returnObj
  }
}