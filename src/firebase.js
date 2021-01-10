import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyB4KR4yAtcYxQbCnBEMrr7EV9ChL9QFuv0",
    authDomain: "fb-cloney.firebaseapp.com",
    projectId: "fb-cloney",
    storageBucket: "fb-cloney.appspot.com",
    messagingSenderId: "596668471506",
    appId: "1:596668471506:web:6e256f3a3e2ddf91c7b50b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;