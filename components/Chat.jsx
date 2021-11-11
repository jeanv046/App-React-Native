import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { AuthContext } from "../navigation/AuthProvider";
import firebase from "../firebase";

const db = firebase.firestore();

const Chat = ({ route, navigation }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { user } = useContext(AuthContext);
  const { userChat } = route.params;

  const getChatRealTime = () => {
    db.collection("chat")
      .where("user_uid_1", "in", [user.uid, userChat.uid])
      .orderBy("createdAt", "asc")
      .onSnapshot((querySnapShot) => {
        const conversations = [];

        querySnapShot.forEach((doc) => {
          if (
            (doc.data().user_uid_1 == user.uid &&
              doc.data().user_uid_2 == userChat.uid) ||
            (doc.data().user_uid_1 == userChat.uid &&
              doc.data().user_uid_2 == user.uid)
          ) {
            conversations.push(doc.data());
          }
        });
        setMessages(conversations);
      });
  };

  useEffect(() => {
    navigation.setOptions({
      title: `${userChat.firstName} ${userChat.lastName}`,
    });
    getChatRealTime();
  }, []);

  const onHandleSubmit = () => {
    if (message.trim() !== "") {
      const msgObj = {
        user_uid_1: user.uid,
        user_uid_2: userChat.uid,
        message,
      };

      db.collection("chat")
        .add({
          ...msgObj,
          isView: false,
          createdAt: new Date(),
        })
        .then((data) => {
          setMessage("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const image = {uri: "https://www.wallpaperuse.com/wallp/11-118588_m.jpg"};

  return (
    <View style={styles.cards}>
      <ImageBackground source={image} resizeMode="cover" style={styles.imageBackground} >
        <ScrollView contentContainerStyle={styles.contentCard2}>
          {messages.map((m, key) => {
            return (
              <Fragment key={key}>
                {m.user_uid_1 === user.uid ? (
                  <View style={styles.contenEmisor}>
                    <View style={styles.CheckEmisor}>
                      <Text style={styles.textoChat}>{m.message}</Text>
                    </View>
                  </View>
                ) : (
                  <View style={styles.contenReceptor}>
                    <View style={styles.ChekReceptor}>
                      <Text style={styles.textoChat}>{m.message}</Text>
                    </View>
                  </View>
                )}
              </Fragment>
            );
          })}
        </ScrollView>
        <View style={styles.contentSubmit}>
          <View style={styles.contentSubmit2}>
            <TextInput
              style={styles.input}
              placeholder="Escribe tu Mensaje"
              value={message}
              onChangeText={(value) => setMessage(value)}
            ></TextInput>
            <TouchableOpacity style={styles.imageEdit} onPress={onHandleSubmit}>
              <Image
                style={styles.imageEdit2}
                source={require("../assets/icon-submit.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
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
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
  },
  imageBackground:{
    justifyContent: "center",
    width: "100%",
    height: "100%",
    
  },
  contentCard2: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    paddingTop:20,
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
    paddingHorizontal: 10,
    paddingVertical: 5,
    display: "flex",
    alignItems: "flex-end",
  },
  ChekReceptor: {
    maxWidth: "80%",
    backgroundColor: "#FFFFFF",
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
    paddingBottom: 5,
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

  imageEdit2: {
    width: 20,
    height: 20,
  },

  contentSubmit2: {
    display: "flex",
  },
  stroke: {
    zIndex: 1,
  },
});

export default Chat;
