import firebase from 'firebase/app'
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBzrpW2tZE9NjXP49zCdVR5w91T1JYKAg8",
    authDomain: "messageapp-315e2.firebaseapp.com",
    databaseURL: "https://messageapp-315e2.firebaseio.com",
    projectId: "messageapp-315e2",
    storageBucket: "messageapp-315e2.appspot.com",
    messagingSenderId: "558061967858"
};

firebase.initializeApp(config);

export default firebase;