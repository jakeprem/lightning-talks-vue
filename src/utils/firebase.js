import { firebaseDb } from '@/firebaseInit'

var db = firebaseDb

function getActiveEvent () {
  let eventsRef = db.collection('events')
  let activeEvents = eventsRef.where('active', '==', true)

  return activeEvents
    .get()
    .then(querySnapshot => {
      let docs = []
      querySnapshot.forEach(doc => {
        docs.push(doc.data())
      })
      return docs[0]
    })
    .catch(error => console.log(error))
}

export default {
  getActiveEvent
}
