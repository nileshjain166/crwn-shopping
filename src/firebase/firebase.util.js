import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyAaAiGA5maz4dFE28vl5StMNTFYYe7_9ts",
    authDomain: "crwn-shopping.firebaseapp.com",
    databaseURL: "https://crwn-shopping.firebaseio.com",
    projectId: "crwn-shopping",
    storageBucket: "",
    messagingSenderId: "562279160770",
    appId: "1:562279160770:web:ebba0e411a06fa31"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({'prompt':'select_account'})
export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;