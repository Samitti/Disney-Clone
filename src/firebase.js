import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDuwjUg7EG37Z0UaiXM0I2HSBXOcZkMYy8",
    authDomain: "disneyplus-clone-60007.firebaseapp.com",
    projectId: "disneyplus-clone-60007",
    storageBucket: "disneyplus-clone-60007.appspot.com",
    messagingSenderId: "1095668912687",
    appId: "1:1095668912687:web:f91d631237d26431f62cda",
    measurementId: "G-2KMW2590RC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;
