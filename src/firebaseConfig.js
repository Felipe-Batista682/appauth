// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDJuXbLzWCVKNUp__MydwHsjNjMucUUd7I",
  authDomain: "appauth-c5ace.firebaseapp.com",
  projectId: "appauth-c5ace",
  storageBucket: "appauth-c5ace.appspot.com",
  messagingSenderId: "527386171373",
  appId: "1:529906816126:android:fca09e371588d1b90a742f" // Substitua pelo seu App ID
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Obtenha a instância de autenticação
export const auth = getAuth(app);
