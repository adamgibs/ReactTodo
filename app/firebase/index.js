import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB-tb5g_ovvCDbVPkFNZ-m9GjNMCwWHyl0",
    authDomain: "gibson-todo-app.firebaseapp.com",
    databaseURL: "https://gibson-todo-app.firebaseio.com",
    storageBucket: "gibson-todo-app.appspot.com",
    messagingSenderId: "625482773384"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
