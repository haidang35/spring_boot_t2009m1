import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyBxXnerrJLxNnA34qQmbQQCXWXRyz3s0Oo",
    authDomain: "springecommerce-67833.firebaseapp.com",
    projectId: "springecommerce-67833",
    storageBucket: "springecommerce-67833.appspot.com",
    messagingSenderId: "112808532877",
    appId: "1:112808532877:web:ef24eb07a045f466ebbbc4"
});
 
// Firebase storage reference
const storage = getStorage(app);
export default storage;