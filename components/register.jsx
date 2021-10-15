import React from "react";
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, Text, View, Image } from "react-native";


const Register = () => {
    const [text, onChangeText] = React.useState(null);

    return (

        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <View style={styles.padreview}>
                <Text style={styles.textoRegister}>Registrate</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder="Nombre"
                    value={text}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder="Apellido"
                    value={text}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder="Correo"
                    value={text}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="contraseña"
                    keyboardType="Text"
                    secureTextEntry={true}
                />
                <View style={styles.view}>
                    <TouchableOpacity
                        style={styles.boton}
                    >
                        <Text style={styles.Text}>Iniciar Sesion</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.boton2}
                    >
                        <Text style={styles.Text}>Registrarme</Text>

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
        fontSize: 18,
        color: "#ffff"
    },
    textoRegister: {
        paddingLeft: 10,
        fontSize: 40,
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