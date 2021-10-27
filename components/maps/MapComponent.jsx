import React from "react";
import MapView, { Marker } from "react-native-maps";
import { View, StyleSheet, LogBox } from "react-native";

const MapComponent = ({ myLocation }) => {
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
        title="Jean Vega"
        description="Soy jean y me gusta el trago"
        coordinate={{
          latitude: Number(JSON.stringify(myLocation.coords.latitude)),
          longitude: Number(JSON.stringify(myLocation.coords.longitude)),
        }}
        pinColor={"blue"}
      ></Marker>

      {/* {users.map((user) => (
        <Marker
          title="Jean Vega"
          description="Soy jean y me gusta el trago"
          coordinate={{
            latitude: Number(JSON.stringify(10.958075048155656)),
            longitude: Number(JSON.stringify(-74.80010398377597)),
          }}
          pinColor={"blue"}
        ></Marker>
      ))} */}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapComponent;
