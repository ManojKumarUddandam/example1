import { initializeApp } from '@angular/fire/app';
import { getAuth } from '@angular/fire/auth';
import { getFirestore } from '@angular/fire/firestore';
export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDgsXzepBvxtaPHUyvs1HLJgtbB0CscIQ0",
        authDomain: "portfolio-89da5.firebaseapp.com",
        projectId: "portfolio-89da5",
        storageBucket: "portfolio-89da5.appspot.com",
        messagingSenderId: "771246856558",
        appId: "1:771246856558:web:3b1dde8c0ce9a7556bc97f",
        measurementId: "G-028MX2E0WN"
    }
  };
  export const firebaseApp = initializeApp(environment.firebaseConfig);
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);