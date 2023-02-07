// import React from "react";
// import ReactDOM from "react-dom";
import React  from 'react'

import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// import * as firebase from "firebase";
// import "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCA1anZObGwoqYDYz6DTHmUhb0Vhslp6og",
  authDomain: "cart-61f40.firebaseapp.com",
  projectId: "cart-61f40",
  storageBucket: "cart-61f40.appspot.com",
  messagingSenderId: "997425510110",
  appId: "1:997425510110:web:ad2c9b1f8c8805622db44f"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();


export default firebase;

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

