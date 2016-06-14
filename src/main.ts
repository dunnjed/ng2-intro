import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
let firebase = require('firebase');

// Initialize Firebase
let config = {
  apiKey: "AIzaSyBumYG81Ird0MHFgMg12txHnoLgrKd-yT8",
  authDomain: "ng2-intro.firebaseapp.com",
  databaseURL: "https://ng2-intro.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);


if (process.env.ENV === 'production') {
  enableProdMode();

  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result: any) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;

    bootstrap(AppComponent, []);
    // ...
  }).catch(function (error: any) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
  });
} else {
  bootstrap(AppComponent, []);
}






