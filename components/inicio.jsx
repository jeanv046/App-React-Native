import React, { useContext, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  PixelRatio,
} from "react-native";
import { AuthContext } from "../navigation/AuthProvider";

const Inicio = ({ navigation }) => {
  const [state, setState] = useState({ fCorreo: "", fPassword: "" });
  const { fCorreo, fPassword } = state;

  const handleChange = async (value, name) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const { login } = useContext(AuthContext);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View style={styles.padreview}>
        <View style={styles.viewimage}>
          <Image
            style={styles.imageEdit}
            source={require("../assets/icon-location-user.png")}
          ></Image>
        </View>

        <Text style={[styles.textoRegister, styles.xlarge]}>
          Inicio de sesión
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(value, name = "fCorreo") => handleChange(value, name)}
          placeholder="Correo"
          value={fCorreo}
          name={"fCorreo"}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value, name = "fPassword") =>
            handleChange(value, name)
          }
          placeholder="Contraseña"
          value={fPassword}
          secureTextEntry={true}
          name={"fPassword"}
        />
        <View style={styles.view}>
          <TouchableOpacity
            style={styles.boton}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={[styles.Text, styles.small]}>Registrarme</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.boton2}
            onPress={() => {
              login(fCorreo, fPassword);
            }}
          >
            <Text style={[styles.Text, styles.small]}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === "android") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
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
    textoRegister: {
        paddingLeft: 10,
        /* fontSize: 30, */
        color: '#ffff',
        marginBottom: 10,
        marginLeft: 17,
        fontWeight: 'bold',

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

        color: "#ffff"
    },
    imageEdit: {
        width: 52,
        height: 90,
    },
    viewimage: {
        /* position: 'absolute', */
        alignSelf: 'center',
        marginBottom: 40
        /* bottom: '-0%' */
    }
});

export default Inicio;
