import { firebaseDb } from '@/firebaseInit'

var db = firebaseDb

function getNextEvent () {
  let eventsRef = db.collection('events')
  let activeEvents = eventsRef.orderBy('start_datetime').limit(1)

  return activeEvents
    .get()
    .then(snapshotHandler)
    .then(docs => docs[0])
    .catch(errorHandler)
}

function getEvents () {
  let eventsRef = db.collection('events')
  let events = eventsRef.orderBy('start_datetime')

  return events
    .get()
    .then(snapshotHandler)
    .catch(errorHandler)
}

function getEventTalks (event) {
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

function getEventSubmittedTalks (event) {
  let talksRef = db.collection('talks')
  // let eventTalks = talksRef.where('eventId', '==', eventId).where('selected', '==', true)
  let eventTalks = talksRef.where('eventId', '==', event['.key'])

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
      return talk
    })
}

export default {
  getNextEvent,
  getEvents,
  getEventTalks,

  getEventSubmittedTalks,
  getUserTalks,

  submitTalkForEvent
}
