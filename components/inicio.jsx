import React,{useState} from "react";
import { ScrollView, StyleSheet, TextInput,TouchableOpacity, Text, View } from "react-native";

const Inicio = () => {
    const [state, setState] = useState({ fCorreo: "", fPassword: ""});
    const handleChange = (value, name) => {
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <View style={styles.padreview}>
                <Text style={styles.textoRegister}>Inicio de sesion</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value, name = 'fName') => handleChange(value, name)}
                    placeholder="Correo"
                    value={state.fCorreo}
                    name={'fName'}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(value, name = 'fPassword') => handleChange(value, name)}
                    placeholder="Contraseña"
                    value={state.fPassword}
                    name={'fPassword'}
                />
                <View style={styles.view}>
                    <TouchableOpacity
                        style={styles.boton}
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
});

export default Inicio;