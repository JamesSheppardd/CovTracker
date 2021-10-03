import React from "react";
import { View, Text, TouchableHighlight, StyleSheet, Dimensions } from "react-native";
import { openNews } from "./button-funcs";
import Colours from "../assets/colours.js";
import gbNewsFile from "../assets/data/gbNews.json";
import worldNewsFile from "../assets/data/worldNews.json";

const RoundedRiskButton = (props) => {
    return (
        <View style={roundButtonStyles.riskButton}>
            <TouchableHighlight 
             activeOpacity={0.6}
             underlayColor={Colours.lRed}
             onPress={() => props.navigation.navigate("Risk", {
                 cases: 123456678
             })}
             style={roundButtonStyles.touchable}
            >
                <Text style={roundButtonStyles.text}>{props.risk} risk of contracting COVID-19 in your area</Text>
            </TouchableHighlight>
        </View>
    )
}

const RoundedNewsButton = (props) => {
    const newsFile = props.area === "gb" ? gbNewsFile : worldNewsFile;

    return (
        <View style={roundButtonStyles.newsButton}>
            <TouchableHighlight 
             activeOpacity={0.6}
             underlayColor={Colours.lYellow}
             onPress={() => props.navigation.navigate("News", {
                 value: props.value,
                 area: props.area
             })}
             style={roundButtonStyles.touchable}
            >
                <Text style={roundButtonStyles.text}>{newsFile.articles[props.value].title}</Text>
            </TouchableHighlight>
        </View>
    )
}

const roundButtonStyles = StyleSheet.create({
    riskButton: {
        flex: 1,
        backgroundColor: Colours.red,
        borderRadius: 20,
        marginTop:15,
        justifyContent:"center",
        marginBottom:20,
        marginLeft:15,
        width:Dimensions.get("window").width - 0.1 * Dimensions.get("window").width,
        height: Dimensions.get("window").height - 0.7 * Dimensions.get("window").height,
    },
    newsButton: {
        flex:1,
        backgroundColor: Colours.yellow,
        borderRadius: 20,
        marginTop:5,
        justifyContent:"center",
        marginBottom:10,
        width:Dimensions.get("window").width - 0.1 * 6 * Dimensions.get("window").width,
    },
    text: {
        textAlign: "center"
    },
    touchable: {
        flex: 1,
        borderRadius: 20,
    }
})

export { RoundedRiskButton, RoundedNewsButton };