import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAh7ssN8Jt8ywDtNUznq58sfyvya-mdRZ4",
    authDomain: "xp-bar.firebaseapp.com",
    databaseURL: "https://xp-bar.firebaseio.com/",
    projectId: "xp-bar",
    storageBucket: "xp-bar.appspot.com",
    messagingSenderId: "965104940223"
};

firebase.initializeApp(config);

export default firebase;