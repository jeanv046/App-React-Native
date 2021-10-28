import firebase from "./index";
const db = firebase.firestore();

export const readUsers = async (setUsers) => {
  const user = await firebase.auth().currentUser
  const data = await db
    .collection("usuarios")
    .where('uid', '!=', user.uid)
    .get()
    .then((snapshot) => {
      let data = []
      snapshot.forEach((doc) => {
        data.push(doc.data())
      });
      setUsers(data)
    });
};

export const saveOrUpdateCoordinate = async (coords) => {
  const user = await firebase.auth().currentUser;
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


