import firebase from "./index";
const db = firebase.firestore();

export const readUsers = async () => {
  const data = await db
    .collection("usuarios")
    .get()
    .then((snapshot) => {
      return snapshot.forEach((doc) => doc.data());
    });
  console.log("esto es data", data);
};

export const saveOrUpdateCoordinate = async (coords) => {
  const user = await firebase.auth().currentUser;
  console.log(user.uid);
  const res = await db
    .collection("usuarios")
    .doc(user.uid)
    .update({
      coordinates: new firebase.firestore.GeoPoint(
        coords.latitude,
        coords.longitude
      ),
    })
    .catch((err) => {
      console.log(err);
    });
};
