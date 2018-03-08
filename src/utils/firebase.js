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
        docs.push({
          '.key': doc.id,
          ...doc.data()
        })
      })
      return docs[0]
    })
    .catch(error => console.log(error))
}

function getEventSelectedTalks (event) {
  let talksRef = db.collection('talks')
  let eventTalks = talksRef.where('eventId', '==', event['.key'])

  return eventTalks
    .get()
    .then(snapshotHandler)
    .then(docs => {
      return docs.filter(doc => {
        return event.submitted_talk_ids.includes(doc['.key'])
      })
    })
    .catch(errorHandler)
}

function getEventSubmittedTalks (eventId) {
  let talksRef = db.collection('talks')
  // let eventTalks = talksRef.where('eventId', '==', eventId).where('selected', '==', true)
  let eventTalks = talksRef.where('eventId', '==', eventId)

  return eventTalks
    .get()
    .then(snapshotHandler)
    .catch(errorHandler)
}

function getUserTalks (userId) {
  let talksRef = db.collection('talks')
  let userTalks = talksRef.where('submitterId', '==', userId).where('selected', '==', true)

  return userTalks
    .get()
    .then(snapshotHandler)
    .catch(errorHandler)
}

function snapshotHandler (querySnapshot) {
  let docs = []
  querySnapshot.forEach(doc => {
    docs.push({
      '.key': doc.id,
      ...doc.data()
    })
  })
  return docs
}

function errorHandler (error) {
  console.log(error)
}

function submitTalkForEvent (talk) {
  let talksRef = db.collection('talks')

  return talksRef
    .add(talk)
    .then(x => {
      console.log('submit', x)
      return talk
    })
}

export default {
  getActiveEvent,
  getEventSelectedTalks,
  getEventSubmittedTalks,
  getUserTalks,

  submitTalkForEvent
}
