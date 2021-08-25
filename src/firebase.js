import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyArkrbBqXUgVF9sHrtup6efupbZRK58byo',
  authDomain: 'linkedin-clone-d68e1.firebaseapp.com',
  projectId: 'linkedin-clone-d68e1',
  storageBucket: 'linkedin-clone-d68e1.appspot.com',
  messagingSenderId: '785023981630',
  appId: '1:785023981630:web:69592ca01a4e450286196f',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
