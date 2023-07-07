// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDwLz4xTWaJ-3vVkAm4-14MZuNtxmTea7A",
    authDomain: "anwr-login.firebaseapp.com",
    projectId: "anwr-login",
    storageBucket: "anwr-login.appspot.com",
    messagingSenderId: "686366789818",
    appId: "1:686366789818:web:8e4322533cf1c18b687283"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Fungsi Login dengan Google
function loginWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // Redirect ke halaman terproteksi setelah login berhasil
      window.location.href = "https://www.anwr.my.id/p/member-area.html";
    })
   .catch(function(error) {
      console.log(error);
    });
}

// Fungsi Login dengan Twitter
function loginWithTwitter() {
  var provider = new firebase.auth.TwitterAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // Redirect ke halaman terproteksi setelah login berhasil
      window.location.href = "https://www.anwr.my.id/p/member-area.html";
    })
    .catch(function(error) {
      console.log(error);
    });
}

// Fungsi Login dengan Github
function loginWithGithub() {
  var provider = new firebase.auth.GithubAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // Redirect ke halaman terproteksi setelah login berhasil
      window.location.href = "https://www.anwr.my.id/p/member-area.html";
    })
   .catch(function(error) {
      console.log(error);
    });
}
