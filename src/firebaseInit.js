import firebase from 'firebase'
import 'firebase/firestore'
import * as firebaseui from 'firebaseui'

const config = {
  apiKey: 'AIzaSyCXE_-TbMSFjqoVtU5lltHSTLSIwQpWab0',
  authDomain: 'lightning-talks-vue.firebaseapp.com',
  databaseURL: 'https://lightning-talks-vue.firebaseio.com',
  projectId: 'lightning-talks-vue',
  storageBucket: 'lightning-talks-vue.appspot.com',
  messagingSenderId: '1039983970304'
}

let uiConfig = {
  signInSuccessUrl: '',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  tosUrl: '/tos',
  callbacks: {
    signInSuccess (user, credential, redirectUrl) {
      console.log('cb_user', user)
      console.log('cb_credential', credential)
      console.log('cb_redirect', redirectUrl)
    }
  }
}

export const firebaseApp = firebase.initializeApp(config)

export const firebaseDb = firebaseApp.firestore()

export const firebaseUI = new firebaseui.auth.AuthUI(firebaseApp.auth())

export const firebaseUIConfig = uiConfig
