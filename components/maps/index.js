import { View, StyleSheet, LogBox } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import React, { useState, useEffect, useContext } from "react";
import { readUsers, saveOrUpdateCoordinate } from "../../firebase/funDatabase";

/* import components */
import MapComponent from "./MapComponent";

LogBox.ignoreLogs(["Setting a timer"]);

const maps = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [statusLocation, setStatusLocation] = useState(false);
  const [myLocation, setMyLocation] = useState(false);

  useEffect(() => {
    async function getPermissionsLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") setStatusLocation(true);
      let location = await Location.getCurrentPositionAsync({});
      setMyLocation(location);
      await saveOrUpdateCoordinate(location.coords);
    }
    getPermissionsLocation();
    getOtherUsers();
    console.log(statusLocation);
    /* console.log(users); */
  }, []);

  async function getOtherUsers() {
    readUsers();
    /* console.log(ubi); */
  }

  LogBox.ignoreLogs(["Setting a timer"]);
  return (
    <View style={styles.container}>
      {myLocation && <MapComponent myLocation={myLocation} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default maps;
