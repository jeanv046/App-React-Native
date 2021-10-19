import React from "react";
import {
    View, StyleSheet, Text, ScrollView
} from "react-native"

export default function Map() {
    return (
        <ScrollView>
            <View style={styles.padre}>
                <Text style={[styles.text]}>Registrate</Text>
            </View>
        </ScrollView>

    )

}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        color: 'black',
        paddingTop: 50,
    },
    padre: {
        paddingBottom:30,
        paddingTop:30
    }
});
