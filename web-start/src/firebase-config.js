/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 const config  = {
  apiKey: "AIzaSyDDZUQo6rsEaeLvUmtVe5yTlfPbHG3bRrc",
  authDomain: "friendlychat-22257.firebaseapp.com",
  projectId: "friendlychat-22257",
  storageBucket: "friendlychat-22257.appspot.com",
  messagingSenderId: "375599061126",
  appId: "1:375599061126:web:47b5f22e3639b5ee279907"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}