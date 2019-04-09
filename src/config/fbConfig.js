import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDYW2Iqqyg8Cppil3nMy3MDCT-i4ww-WQI',
  authDomain: 'todolist-87834.firebaseapp.com',
  databaseURL: 'https://todolist-87834.firebaseio.com',
  projectId: 'todolist-87834',
  storageBucket: 'todolist-87834.appspot.com',
  messagingSenderId: '772170162357'
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
