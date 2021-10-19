import db from "../conection/firebase"
import { getFirestore, collection, getDocs, setDoc, doc } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

  

export const getCities = async () => {
    const citiesCol = collection(db, 'usuarios');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    /* console.log(cityList) */
    return cityList;

}

export const saveData = async (data) => {
    await setDoc(doc(db, 'usuarios', 'Eoj4WICSYsfoJYPLlG6d'), data);
}

export const createUser = async (user) => {
    const { fCorreo, fPassword } = user;
    await createUserWithEmailAndPassword(auth, fCorreo, fPassword)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            console.log(error)
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

//Validacion de inicio de sesion 
export const validation = async()=>{

}

