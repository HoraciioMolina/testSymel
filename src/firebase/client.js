import { initializeApp, getApp, getApps } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  update,
} from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN80E3enFqKKIWd6xKvQsUQVZHSOY_7SI",
  authDomain: "symel-dev-c8b58.firebaseapp.com",
  databaseURL: "https://symel-dev-c8b58-default-rtdb.firebaseio.com",
  projectId: "symel-dev-c8b58",
  storageBucket: "symel-dev-c8b58.appspot.com",
  messagingSenderId: "931971097568",
  appId: "1:931971097568:web:48b08facbe12f65d8f0185",
  measurementId: "G-B49NTZ6YZ5",
};

const verifyApps = getApps();

const firebaseApp = verifyApps.length
  ? getApp()
  : initializeApp(firebaseConfig);

//Instancia de DDBB Firebase
export const db = getDatabase(firebaseApp);

// Login con GitHub
const auth = getAuth(firebaseApp);

export const signIn = async (email, password) => {
  try {
    const resp = await signInWithEmailAndPassword(auth, email, password);
    return resp;
  } catch (error) {
    return error;
  }
};

// Verificacion de authState user
export const authStateChanged = (setUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
};

// Ejemplo de la DDBB

const verifyEmailExist = (customers = [], email) => {
  if (!customers) {
    return false;
  }
  const verify =
    customers &&
    Object.values(customers).filter((cust) => cust.email === email).length;

  return verify !== 0;
};

export const saveNewCustomer = (customer, final) => {
  const customersRef = ref(db, "customers");
  debugger;

  onValue(customersRef, async (snapshot) => {
    const val = snapshot.val();
    const verify = verifyEmailExist(val, customer.email);

    if (verify) {
      return final({
        success: false,
        message: "El email ya existe en nuestra base de datos",
      });
    } else {
      const newCustomerRef = push(customersRef);
      set(newCustomerRef, customer);

      return final({
        success: true,
        message: "Se guardo en la base de datos",
      });
    }
  });
};

export const changeCustomerState = (customer) => {
  const customersRef = ref(db, "customers");
  const customerId = customer.id;
  delete customer.id;
  debugger;
  update(customersRef, { [`/${customerId}`]: customer });
};
