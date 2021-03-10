import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAL8Hpe5wnGycEqSn7zVYEd3fZd5fjMbMY",
    authDomain: "burgerapp-95589.firebaseapp.com",
    databaseURL: "https://burgerapp-95589-default-rtdb.firebaseio.com",
    projectId: "burgerapp-95589",
    storageBucket: "burgerapp-95589.appspot.com",
    messagingSenderId: "642797281245",
    appId: "1:642797281245:web:7cfbbfff62bd41a357e034"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase