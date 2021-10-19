import React,{useState} from "react";
import { ScrollView, StyleSheet, TextInput,TouchableOpacity, Text, View, Image } from "react-native";
import {getCities, createUser} from "../funtion"
import {valEspacio} from "../funtion/validators"

const Inicio = ({navigation}) => {
    getCities()
    const [state, setState] = useState({ fCorreo: "", fPassword: ""});
    const handleChange = async(value, name) => {
        console.log(await valEspacio(value))
        if (await valEspacio(value)){
            setState(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <View style={styles.padreview}>
                <Image 
                style={styles.imageEdit}
                source={require('../assets/icon-location-user.png')}></Image>
                <Text style={styles.textoRegister}>Inicio de sesión</Text>
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
                    placeholder="Contraseña"
                    value={state.fPassword}
                    secureTextEntry={true}
                    name={'fPassword'}
                />
                <View style={styles.view}>
                    <TouchableOpacity
                        style={styles.boton}
                        onPress={()=> navigation.navigate('Register')}
                    > 
                        <Text style={styles.Text}>Registrarme</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.boton2}
                        /* onPress={()=>createUser(state)} */
                    >
                        <Text style={styles.Text}>Iniciar Sesion</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
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
    textoRegister:{
        paddingLeft: 10,
        fontSize: 40,
        color: '#ffff',
        marginBottom: 10,
        marginLeft: 17,
        fontWeight: 'bold'
    },
    padreview: {
        paddingTop: 30,
        paddingBottom: 30,
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
        fontSize: 18,
        color: "#ffff"
    },
    imageEdit: {
        width: 286,
        height: 189,
    }
});

export default Inicio;