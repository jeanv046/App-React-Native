import React, { useState, useEffect } from "react";
import {
    ScrollView, StyleSheet, Text, View,
    navigation, TextInput, Image,
} from "react-native";
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

    const submitChat = () => {

    }

    return (
        <View style={styles.container}>
            {location && <MapComponent />}
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
                            <Text style={styles.textoChat}>Hola como estas? espero que te encuentres bien y que todo salga correcto? como sigue mi tia? esta bien.</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.contentSubmit}>
                    <View style={styles.contentSubmit2}>
                        <TextInput
                            style={styles.input}
                            placeholder="Escribe tu Mensaje"
                        >

                        </TextInput>
                        <Image
                            style={styles.imageEdit}
                            source={require('../assets/icon-submit.png')}>
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
    cards: {
        width: '95%',
        height: 300,
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        borderRadius: 16,
        backgroundColor: '#002138',
        position: 'absolute',
        bottom: 0,
    },
    contentCard2: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        /* backgroundColor: 'black' */
    },
    contenReceptor: {
        width: '100%',
        padding: 10,
        display: 'flex',
        alignItems: 'flex-start',
    },
    contenEmisor: {
        width: '100%',
        padding: 10,
        display: 'flex',
        alignItems: 'flex-end',
    },
    ChekReceptor: {
        maxWidth: '80%',
        backgroundColor: 'white',
        borderRadius: 16,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    CheckEmisor: {
        maxWidth: '80%',
        backgroundColor: '#AAFEA5',
        borderRadius: 16,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    textoChat: {
        fontSize: 18,
        color: 'black',

    },
    contentSubmit: {
        width: '100%',
        position: 'relative',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 35,
        borderRadius: 50,
        backgroundColor: '#FFFFFF',

    },
    imageEdit: {
        width: 20,
        height: 20,
        right: 22,
        position: 'absolute',
        top: 22,

    },
    contentSubmit2: {
        display: 'flex',
    },

});
export default maps
