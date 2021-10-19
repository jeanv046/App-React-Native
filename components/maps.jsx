import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, navigation, } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';



const maps = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    useEffect(() => {

        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            /* console.log(JSON.stringify(location)) */
        })();
    }, []);
    const MapComponent = () => {
        return (
            <MapView style={styles.map}

                region={location && {
                    latitude: Number(JSON.stringify(location.coords.latitude)),
                    longitude: Number(JSON.stringify(location.coords.longitude)),
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}>
                <Marker
                    title="My Marker"
                    coordinate={{
                        latitude: Number(JSON.stringify(location.coords.latitude)),
                        longitude: Number(JSON.stringify(location.coords.longitude)),
                    }}
                />
            </MapView>
        )
    }
    return (
        <View style={styles.container}>

            {location && <MapComponent />}
            <View style={styles.cards}>

            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: "100%",
        justifyContent: 'flex-end',
        alignItems: 'center',
        
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'center',
    },
    cards:{
        width: '95%',
        height: 250,
        padding:10,
        marginLeft:20,
        marginRight:20,
        marginBottom: 10,
        borderRadius: 16,
        backgroundColor: '#002138',
        position: 'absolute',
        bottom: 0,
    }
});
export default maps