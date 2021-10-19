import React, { useState } from "react";
import {
    ScrollView, StyleSheet, TextInput, TouchableOpacity,
    Text, View, Image, navigation, Dimensions, Platform, PixelRatio,
} from "react-native";
import { getCities, createUser } from "../funtion"


const Register = ({ navigation }) => {
    getCities()
    const [state, setState] = useState({ fName: "", fApellido: "", fCorreo: "", fPassword: "" });
    const handleChange = (value, name) => {
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = () => {
        createUser(state)
        setState({ fName: "", fApellido: "", fCorreo: "", fPassword: "" })
    }
    return (

        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <View style={styles.padreview}>
                <Text style={[styles.textoRegister, styles.xlarge]}>Registrate</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value, name = 'fName') => handleChange(value, name)}
                    placeholder="Nombre"
                    value={state.fName}
                    name={'fName'}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(value, name = 'fApellido') => handleChange(value, name)}
                    placeholder="Apellido"
                    value={state.fApellido}
                    name={'fApellido'}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(value, name = 'fCorreo') => handleChange(value, name)}
                    placeholder="Correo"
                    value={state.fCorreo}
                    name={'fCorreo'}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(value, name = 'fPassword') => handleChange(value, name)}
                    value={state.fPassword}
                    placeholder="contraseña"
                    secureTextEntry={true}
                    name={'fPassword'}
                />
                <View style={styles.view}>
                    <TouchableOpacity
                        style={styles.boton}
                        onPress={() => navigation.navigate('login')}
                    >
                        <Text style={[styles.Text, styles.small]}>Iniciar Sesion</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.boton2}
                        onPress={handleSubmit}
                    >
                        <Text style={[styles.Text, styles.small]}>Siguiente</Text>

                    </TouchableOpacity>
                </View>
                <View style={styles.viewimage} >
                    <Image
                        style={styles.imageEdit}
                        source={require('../assets/personas.png')}
                    >

                    </Image>
                </View>
            </View>


        </ScrollView>
    );
};

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'android') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}
const styles = StyleSheet.create({
    mini: {
        fontSize: normalize(12),
    },
    small: {
        fontSize: normalize(15),
    },
    medium: {
        fontSize: normalize(17),
    },
    large: {
        fontSize: normalize(20),
    },
    xlarge: {
        fontSize: normalize(24),
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 50,
        backgroundColor: '#FFFFFF',

    },
    padreview: {
        paddingTop: 30,
        paddingBottom: 30
    },
    boton: {
        width: '45%',
        height: 50,
        margin: 10,
        backgroundColor: "#1C4C96",
        alignItems: "center",
        borderRadius: 50,
        justifyContent: "center",
    },
    boton2: {
        width: '45%',
        height: 50,
        margin: 10,
        backgroundColor: "#24C912",
        alignItems: "center",
        borderRadius: 50,
        justifyContent: "center",
    },
    view: {
        flexDirection: "row",
        width: '100%',
        justifyContent: 'center',
    },
    Text: {
        /* fontSize: 18, */
        color: "#ffff"
    },
    textoRegister: {
        paddingLeft: 10,
        /* fontSize: 40, */
        color: '#ffff',
        marginBottom: 10,
        marginLeft: 17,
        fontWeight: 'bold',
    },
    viewimage: {
        /* position: 'absolute', */
        alignSelf: 'center',
        marginTop: 40,
        /* bottom: '-0%' */
    },
    imageEdit: {
        width: 286,
        height: 189,
    }
});

export default Register;