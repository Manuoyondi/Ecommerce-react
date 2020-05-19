import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD1Ro1DjooyUb2ZU7mENTohz4lB0T_VRyE",
    authDomain: "ecommerce-91b41.firebaseapp.com",
    databaseURL: "https://ecommerce-91b41.firebaseio.com",
    projectId: "ecommerce-91b41",
    storageBucket: "ecommerce-91b41.appspot.com",
    messagingSenderId: "151013942033",
    appId: "1:151013942033:web:d08a3063981aef3b7262b0",
    measurementId: "G-E1NBT0P6WN"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            }) 
        }catch(error){
            console.log(error.message); 
        }
    }

    return userRef;
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
