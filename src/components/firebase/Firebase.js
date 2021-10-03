import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB7cCIxAaXBgsIw92qnMyEiIIL3qmGV-wU",
    authDomain: "coderhouse-react-3558e.firebaseapp.com",
    projectId: "coderhouse-react-3558e",
    storageBucket: "coderhouse-react-3558e.appspot.com",
    messagingSenderId: "881795342583",
    appId: "1:881795342583:web:314b4e14d2e967e48ef3f2"
}

const app = firebase.initializeApp(firebaseConfig)

export const getFirebase = () => {
    return app
}

export const db = getFirestore(app)