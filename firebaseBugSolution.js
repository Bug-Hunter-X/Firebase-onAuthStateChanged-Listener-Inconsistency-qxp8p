import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Your Firebase configuration here
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//Improved listener handling
const authStateChanged = async () => {
  try {
     auth.onAuthStateChanged(async (user) => {
       if (user) {
         // User is signed in.
         console.log('User is signed in:', user.uid);
         // Get user data
       } else {
         // User is signed out.
         console.log('User is signed out.');
       }
     });
  } catch (error) {
    console.error('Error in onAuthStateChanged:', error);
  }
};

authStateChanged();
