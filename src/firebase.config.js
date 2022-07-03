import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBDwmecPjk3YOOk_FMMSFlYNK9pJr67eMg",
    authDomain: "foodapp-76faf.firebaseapp.com",
    databaseURL: "https://foodapp-76faf-default-rtdb.firebaseio.com",
    projectId: "foodapp-76faf",
    storageBucket: "foodapp-76faf.appspot.com",
    messagingSenderId: "592743341747",
    appId: "1:592743341747:web:38cec6ba708c48d169dac6"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage };