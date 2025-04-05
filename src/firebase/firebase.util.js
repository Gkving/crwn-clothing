import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {   
        apiKey: "AIzaSyAVfGoDSJ2TOQSCCl7Hens3px_ksM4B6ew",
        authDomain: "crwn-db-c5b1d.firebaseapp.com",
        projectId: "crwn-db-c5b1d",
        storageBucket: "crwn-db-c5b1d.firebasestorage.app",
        messagingSenderId: "51453717521",
        appId: "1:51453717521:web:efc71b3c0754305684d5b0"      
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();
        if (!snapShot.exists) {
                const { displayName, email } = userAuth;
                const createdAt = new Date();
                try {
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData,
                        });
                } catch (error) {
                        console.log("error creating user", error.message);
                }
        }
        return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
