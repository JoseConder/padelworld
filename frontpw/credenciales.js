import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import 'dotenv/config';

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};
  
const appFirebase = initializeApp(firebaseConfig);
const appFirebaseAuth = initializeAuth(appFirebase, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
export default {
    appFirebase,
    appFirebaseAuth};