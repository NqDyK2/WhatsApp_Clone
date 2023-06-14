import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBAn3qRAmZOecKu8KjkWttxFlvXJEiWC7E",
    authDomain: "whatsapp-clone-96a03.firebaseapp.com",
    projectId: "whatsapp-clone-96a03",
    storageBucket: "whatsapp-clone-96a03.appspot.com",
    messagingSenderId: "110854976123",
    appId: "1:110854976123:web:7fc08e90d687cddb0068de",
    measurementId: "G-58LL6L3H82"
};

const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app);
