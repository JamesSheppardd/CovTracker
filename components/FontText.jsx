import React from "react";
import { Text, StyleSheet } from "react-native";
import * as Font from "expo-font";
import Apploading from "expo-app-loading";

const FontText = () => {
    return (
        <Text style={style.text}></Text>
    )
}

const style = StyleSheet.create({
    text:{
        fontFamily: "roboto"
    }
})

export default FontText;