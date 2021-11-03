import {
  View,
  StyleSheet,
  LogBox,
  Image,
  ScrollView,
  Text,
  TextInput,
} from "react-native";
import * as Location from "expo-location";
import React, { useState, useEffect, useContext } from "react";
import { readUsers, saveOrUpdateCoordinate } from "../../firebase/funDatabase";

/* import components */
import MapComponent from "./MapComponent";
import Chat from "./Chat";

LogBox.ignoreLogs(["Setting a timer"]);

const maps = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [statusLocation, setStatusLocation] = useState(false);
  const [myLocation, setMyLocation] = useState(false);
  const [openChat, setOpenChat] = useState(false);

  useEffect(() => {
    async function getPermissionsLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log(status);
      if (status === "granted") setStatusLocation(true);
      let location = await Location.getCurrentPositionAsync({});
      setMyLocation(location);
      await saveOrUpdateCoordinate(location.coords);
    }
    getPermissionsLocation();
    readUsers(setUsers);
  }, []);

  LogBox.ignoreLogs(["Setting a timer"]);
  return (
    <View style={styles.container}>
      {myLocation && (
        <MapComponent
          myLocation={myLocation}
          users={users}
          setOpenChat={setOpenChat}
        />
      )}
      {openChat ? <Chat setOpenChat={setOpenChat} /> : null}
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
});
export default maps;
