import firebase from "./index";
const db = firebase.firestore();

export const readUsers = async (setUsers) => {
  const user = await firebase.auth().currentUser;
  await db.collection("usuarios").onSnapshot((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().uid !== user.uid) {
        data.push(doc.data());
      }
    });
    setUsers(data);
  });
};

export const saveOrUpdateCoordinate = async (coords) => {
  const user = firebase.auth().currentUser;
  if (user)
    await db
      .collection("usuarios")
      .doc(user.uid)
      .update({
        coordinates: new firebase.firestore.GeoPoint(
          coords.latitude,
          coords.longitude
        ),
      })
      .then(() => console.log("Success save coords"))
      .catch((err) => {
        console.log("Error save coords");
        console.log(err);
      });
};
