import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyDAy0AIOsEhOQEJudoCEDIggRV1qYw7L2I",
    authDomain: "videoproject-6dc67.firebaseapp.com",
    databaseURL: "https://videoproject-6dc67.firebaseio.com",
    projectId: "videoproject-6dc67",
    storageBucket: "videoproject-6dc67.appspot.com",
    messagingSenderId: "484396277528"
});

export default firebase;
