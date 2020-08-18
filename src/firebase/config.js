import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAtbhwF_48K0MVhFp3ifBD6fljTY7fkVo4",
  authDomain: "myproject-212208.firebaseapp.com",
  databaseURL: "https://myproject-212208.firebaseio.com",
  projectId: "myproject-212208",
  storageBucket: "myproject-212208.appspot.com",
  messagingSenderId: "685659156331",
  appId: "1:685659156331:web:2ba497e880367cda79e62e",
  measurementId: "G-KR2HLTXZ5K",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
