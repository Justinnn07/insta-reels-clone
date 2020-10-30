import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCPLLBKjhV2lv9voIqYr9BPbXuJ6AU4ZXI",
    authDomain: "instagram-reels-clone-989.firebaseapp.com",
    databaseURL: "https://instagram-reels-clone-989.firebaseio.com",
    projectId: "instagram-reels-clone-989",
    storageBucket: "instagram-reels-clone-989.appspot.com",
    messagingSenderId: "739030135548",
    appId: "1:739030135548:web:339966be8bf717302f5d79",
    measurementId: "G-TFM6V9BZ9C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db