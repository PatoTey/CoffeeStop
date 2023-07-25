import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDoc, doc, getDocs} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAi0yFV3MNoRv1Yy_JWoj0SeBX3PvNZwF0",
  authDomain: "coffeestop-aab34.firebaseapp.com",
  projectId: "coffeestop-aab34",
  storageBucket: "coffeestop-aab34.appspot.com",
  messagingSenderId: "500511709786",
  appId: "1:500511709786:web:eeb0043b86dd47c2625663"
};

const app = initializeApp(firebaseConfig);
const coffeeDB = getFirestore(app)

const coffeeCollectionRef = collection(coffeeDB, "coffees")

export async function getRandomCoffee(id){
    const docRef = doc(coffeeDB, "coffees", id)
    const snapshot = await getDoc(docRef)
    return snapshot.data()

}

export async function getCoffees(){
    const snapshot = await getDocs(coffeeCollectionRef)
    const coffees = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return coffees
}