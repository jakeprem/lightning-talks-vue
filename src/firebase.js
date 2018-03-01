import firebase from 'firebase'
import 'firebase/firestore'

const config = {

}

export const fb_app = firebase.initializeApp(config)

export const db = fb_app.firestore()