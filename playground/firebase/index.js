import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB-tb5g_ovvCDbVPkFNZ-m9GjNMCwWHyl0",
    authDomain: "gibson-todo-app.firebaseapp.com",
    databaseURL: "https://gibson-todo-app.firebaseio.com",
    storageBucket: "gibson-todo-app.appspot.com",
    messagingSenderId: "625482773384"
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();
  firebaseRef.set({
    app: {
      name: 'Todo App',
      version: '1.0'
    },
    isRunning: true,
    user: {
      name: 'Adam',
      age: 28
    }
  });

// var notesRef = firebaseRef.child('notes');
//
// var newNoteRef = notesRef.push({
//   text:'Walk the dog'
// });
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

var newTodoRef = todosRef.push({
  text: 'Do some programming'
});

var newTodoRef = todosRef.push({
  text: 'Do some other things'
});
