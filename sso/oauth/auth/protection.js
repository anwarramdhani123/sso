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

// Cek status login setiap kali halaman dimuat
function checkAuth() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // Cek waktu kadaluwarsa sesi login
      var expirationTime = user.metadata.lastSignInTime;
      var currentTime = new Date().getTime();
      var sessionDuration = 3600000; // Durasi sesi login dalam milidetik (misalnya 1 jam)

      if (currentTime - new Date(expirationTime).getTime() > sessionDuration) {
        // Jika sesi login telah kedaluwarsa, logout dan redirect ke halaman login
        logout();
      }
    } else {
      // Jika pengguna belum login, redirect ke halaman login
      redirectToLogin();
    }
  });
}

// Simpan URL halaman asal saat mengarahkan pengguna ke halaman login
function redirectToLogin() {
  var currentUrl = window.location.href;
  sessionStorage.setItem("redirectUrl", currentUrl);
  window.location.href = "https://sso.anwr.my.id/sso/oauth/auth/login/";
}

// Logout function
function logout() {
  firebase.auth().signOut()
    .then(function() {
      // Redirect ke halaman login setelah berhasil logout
      redirectToLogin();
    })
    .catch(function(error) {
      console.log(error);
    });
}

// Panggil fungsi checkAuth saat halaman dimuat
checkAuth();

// Tambahkan pengecekan status login saat halaman dimuat ulang
window.addEventListener("DOMContentLoaded", checkAuth);
