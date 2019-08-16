import * as firebase from "firebase";
let firebaseConfig = {
  apiKey: "AIzaSyBzYodxC0p5Z7RswVeyrYKCPal2fhXWAsI",
  authDomain: "instagram-react-native-30df2.firebaseapp.com",
  databaseURL: "https://instagram-react-native-30df2.firebaseio.com",
  projectId: "instagram-react-native-30df2",
  storageBucket: "",
  messagingSenderId: "279530125090",
  appId: "1:279530125090:web:29b6db169f0f5449"
};
firebase.initializeApp(firebaseConfig);

export const autentication = firebase.auth();
export const database = firebase.database();
