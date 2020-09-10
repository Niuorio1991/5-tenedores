import React from 'react';
import {StyleSheet, ScrollView, Image, Text, View} from 'react-native';
import {Divider} from "react-native-elements";

export default function Login() {
    return (
        <ScrollView>
            <Image
                source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")}
                resizeMode="contain"
                style={style.logo}
            />
        <View style={style.viewContainer}>
            <Text></Text>
            <Text></Text>
        </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    logo: {
      width: "100%",
      height: 150,
      marginTop:20,
    },
    viewContainer: {
        marginRight: 40,
        marginLeft: 40
    }
});