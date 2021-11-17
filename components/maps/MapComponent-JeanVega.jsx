import React, { useContext } from "react";
import MapView, { Marker } from "react-native-maps";
import { View, StyleSheet, LogBox } from "react-native";
import { AuthContext } from "../../navigation/AuthProvider";

const MapComponent = ({ myLocation, users, setOpenChat, navigation }) => {
  const { user } = useContext(AuthContext);
  return (
    <MapView
      style={styles.map}
      region={{
        latitude: Number(JSON.stringify(myLocation.coords.latitude)),
        longitude: Number(JSON.stringify(myLocation.coords.longitude)),
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      <Marker
        title={user.displayName}
        coordinate={{
          latitude: Number(JSON.stringify(myLocation.coords.latitude)),
          longitude: Number(JSON.stringify(myLocation.coords.longitude)),
        }}
        pinColor={"blue"}
      ></Marker>

      {users.map(
        (user) =>
          user.coordinates && (
            <Marker
              key={user.uid}
              title={`${user.firstName} ${user.lastName}`}
              coordinate={{
                latitude: Number(JSON.stringify(user.coordinates.latitude)),
                longitude: Number(JSON.stringify(user.coordinates.longitude)),
              }}
              onPress={() => {
                navigation.navigate("chat", {
                  userChat: user,
                });
              }}
            ></Marker>
          )
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapComponent;
