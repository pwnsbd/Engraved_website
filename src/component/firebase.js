import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBl47bkuMDV8PMPKyCl6VlJhcP2P_gx8fQ",
  authDomain: "engraved-933fe.firebaseapp.com",
  databaseURL: "https://engraved-933fe.firebaseio.com",
  projectId: "engraved-933fe",
  storageBucket: "engraved-933fe.appspot.com",
  messagingSenderId: "140451078350",
  appId: "1:140451078350:web:dc04bf1a128a74e6cef09f",
  measurementId: "G-3WX70TMJZ6"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const storage = firebase.storage();

export default firebase;
export {storage};