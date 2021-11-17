import React, { createContext, useState } from "react";
import firebase from "../firebase";
import {Alert} from "react-native";

const db = firebase.firestore();

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => Alert.alert('Error inicio de sesion', 'Usuario o contraseña es invalido'));
        },
        register: async (email, password, firstName, lastName) => {
          await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userData) => {
              var user = userData.user;
              user
                .updateProfile({
                  displayName: `${firstName} ${lastName}`,
                })
                .then(() => {
                  db.collection("usuarios").doc(userData.user.uid).set({
                    firstName,
                    lastName,
                    uid: userData.user.uid,
                    createdAt: new Date(),
                    isOnline: true,
                  });
                });
            })
            .catch((err) => console.log(err));
        },
        logout: async () => {
          try {
            await firebase.auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
