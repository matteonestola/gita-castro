/*
  Configurazione Firebase — Cambusa condivisa
  ---------------------------------------------
  1. Vai su https://console.firebase.google.com e crea un progetto gratuito
  2. Attiva "Realtime Database" (modalità test, oppure con le regole indicate
     in fondo a index.html)
  3. Project settings → "I tuoi progetti" → aggiungi una web app → copia qui
     sotto i valori che ti vengono mostrati

  Questo file resta separato da index.html apposta: puoi aggiornare il sito
  (nuove sezioni, testi, stile) ricaricando solo index.html su GitHub, senza
  mai toccare né perdere questa configurazione.
*/
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT",
};
