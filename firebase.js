import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyDezQ7MmnMF5oxrP5VaNdcMCenuh4lUx0k",
 authDomain: "pantry-tracking-7e230.firebaseapp.com",
 projectId: "pantry-tracking-7e230",
 storageBucket: "pantry-tracking-7e230.appspot.com",
 messagingSenderId: "317184773946",
 appId: "1:317184773946:web:873019c8115473c1ee4a03",
 measurementId: "G-50PQ90XJ0N"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };