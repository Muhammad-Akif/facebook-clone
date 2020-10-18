import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAtLdztL79SdxczKaI0sl8C5ixf3-tSPVE",
    authDomain: "facebookclonemyself.firebaseapp.com",
    databaseURL: "https://facebookclonemyself.firebaseio.com",
    projectId: "facebookclonemyself",
    storageBucket: "facebookclonemyself.appspot.com",
    messagingSenderId: "20054364201",
    appId: "1:20054364201:web:1bc5d60271aa38f0a98c38",
    measurementId: "G-9VWG54CMLZ"
});


const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();

export { auth, db, storage };
