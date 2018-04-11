import { HTTP } from '@/lib/http-common.js'

let returnData = resp => resp.data
let logError = err => console.error(err)

export default {
  getActiveEvent () {
    return HTTP.get('events/active/')
      .then(returnData)
      .catch(logError)
  },
  getEventTalks (eventId) {
    return HTTP.get(`events/${eventId}/talks/`)
      .then(returnData)
      .catch(logError)
  }
}
