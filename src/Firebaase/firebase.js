// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD0wZZKyy6aTIHJDP7SLRu44Op1aO3M5zI",
    authDomain: "slack-clone-4ad1c.firebaseapp.com",
    databaseURL: "https://slack-clone-4ad1c.firebaseio.com",
    projectId: "slack-clone-4ad1c",
    storageBucket: "slack-clone-4ad1c.appspot.com",
    messagingSenderId: "3782953985",
    appId: "1:3782953985:web:4671b43ce3d2098b950400",
    measurementId: "G-WP0EC6XHXD"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
