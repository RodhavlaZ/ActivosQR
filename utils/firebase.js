import firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyD3RM2-l2--IXqiKWrlO96h1H7JOl6B8Vw",
    authDomain: "residencias-5d4dc.firebaseapp.com",
    databaseURL: "https://residencias-5d4dc-default-rtdb.firebaseio.com",
    projectId: "residencias-5d4dc",
    storageBucket: "residencias-5d4dc.appspot.com",
    messagingSenderId: "529087298246",
    appId: "1:529087298246:web:0aaa6e582a797ab08475c7",
    measurementId: "G-G2D9QFJZHL"
};


if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

    const firestore = firebase.firestore();

    export { firestore };