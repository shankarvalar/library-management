import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBxrg3UEXHeZ9awsKGxyiZwZfWojDww3Wo",
    authDomain: "library-management-dbb8c.firebaseapp.com",
    projectId: "library-management-dbb8c",
    storageBucket: "library-management-dbb8c.appspot.com",
    messagingSenderId: "10657537417",
    appId: "1:10657537417:web:c9a085c5d3bf6ece95d558"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


