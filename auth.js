// auth.js
import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

const form = document.getElementById("auth-form");
const toggle = document.getElementById("toggle-mode");
const title = document.getElementById("form-title");
const submitBtn = document.getElementById("submit-btn");
const messageBox = document.getElementById("message");

let isLogin = true;

toggle.addEventListener("click", () => {
  isLogin = !isLogin;
  title.textContent = isLogin ? "Connexion" : "Inscription";
  submitBtn.textContent = isLogin ? "Se connecter" : "S’inscrire";
  toggle.textContent = isLogin ? "Pas encore inscrit ? Crée un compte" : "Déjà inscrit ? Se connecter";
  messageBox.textContent = "";
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    if (isLogin) {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "dashboard.html";
    } else {
      await createUserWithEmailAndPassword(auth, email, password);
      messageBox.textContent = "Inscription réussie ! Vérifie ton email.";
    }
  } catch (error) {
    messageBox.textContent = "Erreur : " + error.message;
  }
});
