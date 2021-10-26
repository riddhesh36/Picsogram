import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCZT_Rszz41oEqaoPqt5OvhQVPKz0zU4z0",
    authDomain: "firegram-c8517.firebaseapp.com",
    projectId: "firegram-c8517",
    storageBucket: "firegram-c8517.appspot.com",
    messagingSenderId: "611187725709",
    appId: "1:611187725709:web:69b346d52aac9a634e19c4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };