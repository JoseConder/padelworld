import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyC75aSogBYV9ftfOUI8j7U3upNoqP--cdY",
    authDomain: "padelworld-62d27.firebaseapp.com",
    projectId: "padelworld-62d27",
    storageBucket: "padelworld-62d27.appspot.com",
    messagingSenderId: "842503758444",
    appId: "1:842503758444:web:b1867022356693399c6e49",
    measurementId: "G-WMB68YCM44"
};

const appFirebase = initializeApp(firebaseConfig);
const appFirebaseAuth = initializeAuth(appFirebase, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
export default {
    appFirebase,
    appFirebaseAuth};