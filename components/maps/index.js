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

LogBox.ignoreLogs(["Setting a timer"]);

const maps = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [statusLocation, setStatusLocation] = useState(false);
  const [myLocation, setMyLocation] = useState(false);

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
      {myLocation && <MapComponent myLocation={myLocation} users={users} />}

      <View style={styles.cards}>
        <ScrollView contentContainerStyle={styles.contentCard2}>
          <View style={styles.contenReceptor}>
            <View style={styles.ChekReceptor}>
              <Text style={styles.textoChat}>Registrate</Text>
            </View>
          </View>
          <View style={styles.contenEmisor}>
            <View style={styles.CheckEmisor}>
              <Text style={styles.textoChat}>Registrate</Text>
            </View>
          </View>
          <View style={styles.contenReceptor}>
            <View style={styles.ChekReceptor}>
              <Text style={styles.textoChat}>
                Hola como estas? espero que te encuentres bien y que todo salga
                correcto? como sigue mi tia? esta bien.
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.contentSubmit}>
          <View style={styles.contentSubmit2}>
            <TextInput
              style={styles.input}
              placeholder="Escribe tu Mensaje"
            ></TextInput>
            <Image
              style={styles.imageEdit}
              source={require("../../assets/icon-submit.png")}
            >
              {/* onclick={this.submitChat} */}
            </Image>
          </View>
        </View>
      </View>
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
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
  cards: {
    width: "95%",
    height: 300,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: "#002138",
    position: "absolute",
    bottom: 0,
    opacity: 0.78,
  },
  contentCard2: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    /* backgroundColor: 'black' */
  },
  contenReceptor: {
    width: "100%",
    padding: 10,
    display: "flex",
    alignItems: "flex-start",
  },
  contenEmisor: {
    width: "100%",
    padding: 10,
    display: "flex",
    alignItems: "flex-end",
  },
  ChekReceptor: {
    maxWidth: "80%",
    backgroundColor: "white",
    borderRadius: 16,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  CheckEmisor: {
    maxWidth: "80%",
    backgroundColor: "#AAFEA5",
    borderRadius: 16,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  textoChat: {
    fontSize: 18,
    color: "black",
  },
  contentSubmit: {
    width: "100%",
    position: "relative",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 35,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
  },
  imageEdit: {
    width: 20,
    height: 20,
    right: 22,
    position: "absolute",
    top: 22,
  },
  contentSubmit2: {
    display: "flex",
  },
  stroke: {
    zIndex: 1,
  },
  imageEdit2: {
    width: 50,
    height: 50,
  },
});

export default maps;
