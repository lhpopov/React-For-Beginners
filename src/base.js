import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBUzMRh_CCnVHEzcM9bX_l-2y0K-nJnddo",
    authDomain: "react-for-beginners-testr.firebaseapp.com",
    databaseURL: "https://react-for-beginners-testr.firebaseio.com"
 });

const base = Rebase.createClass(firebaseApp.database());

export  { firebaseApp };

export default base;