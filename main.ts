import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ_5RGzVkCXwEnhgVur-zaX6Nzx6-ZS7U",
  authDomain: "gamenight-fd.firebaseapp.com",
  projectId: "gamenight-fd",
  storageBucket: "gamenight-fd.appspot.com",
  messagingSenderId: "803260847679",
  appId: "1:803260847679:web:a77331dcc0c31310220a8a",
  measurementId: "G-WW1YFDEQE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
