
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDRlBq1jRSi0XrNKJe4MNqYFpRu4_Kp3cY",
    authDomain: "kwitter-d0867.firebaseapp.com",
    databaseURL: "https://kwitter-d0867-default-rtdb.firebaseio.com",
    projectId: "kwitter-d0867",
    storageBucket: "kwitter-d0867.appspot.com",
    messagingSenderId: "106291817134",
    appId: "1:106291817134:web:2838e549b090faa3e21b3f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          School : "Veer"
      });
  }