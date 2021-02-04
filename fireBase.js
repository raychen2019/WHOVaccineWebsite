var app_fireBase = {};
(function (){
 var firebaseConfig = {
    apiKey: "AIzaSyDCusmxi3fWPbMkBi8OT19zDcAmHQzbBfE",
    authDomain: "t4sg-who.firebaseapp.com",
    projectId: "t4sg-who",
    storageBucket: "t4sg-who.appspot.com",
    messagingSenderId: "334068760277",
    appId: "1:334068760277:web:87ed58450e92a2b3046c5c",
    measurementId: "G-8TKXNYTBSX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  app_fireBase = firebase;
})()