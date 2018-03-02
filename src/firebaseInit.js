import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyCXE_-TbMSFjqoVtU5lltHSTLSIwQpWab0',
  authDomain: 'lightning-talks-vue.firebaseapp.com',
  databaseURL: 'https://lightning-talks-vue.firebaseio.com',
  projectId: 'lightning-talks-vue',
  storageBucket: 'lightning-talks-vue.appspot.com',
  messagingSenderId: '1039983970304'
}

export const firebaseApp = firebase.initializeApp(config)

export const firebaseDb = firebaseApp.firestore()
