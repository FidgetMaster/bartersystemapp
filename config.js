import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyAJnPOS1YzT3Eoj_h5w-h7aTRBu6sF0WZI",
    authDomain: "bartersystemapp-d75a2.firebaseapp.com",
    projectId: "bartersystemapp-d75a2",
    storageBucket: "bartersystemapp-d75a2.appspot.com",
    messagingSenderId: "493560793021",
    appId: "1:493560793021:web:b442a0ba4b2da9ce0874d4"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
