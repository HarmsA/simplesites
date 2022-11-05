import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCXcXXgdAY4T-NLT7DqnZE16j-MPT-SabY",
    authDomain: "simple-sites-8fe04.firebaseapp.com",
    projectId: "simple-sites-8fe04",
    storageBucket: "simple-sites-8fe04.appspot.com",
    messagingSenderId: "885682011178",
    appId: "1:885682011178:web:3277110412857cbf4b5753",
    measurementId: "G-FXRG3V6L9N"
  };

initializeApp(firebaseConfig);

const db = getFirestore

export {db}