import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

const Divider = (props) => {
    const w = Dimensions.get("window").width - props.lPad/100 * 2 * Dimensions.get("window").width;
    return(
        <View style={{
            backgroundColor: "#adadcb", 
            height:StyleSheet.hairlineWidth, 
            width:Dimensions.get("window").width - props.lPad/100 * 2 * Dimensions.get("window").width,
            marginBottom:5
        }}></View>
    )
}

const DividerWithText = (props) => {
    return(
        <View>
            <View style={{height:1, backgroundColor:"black"}}></View>
            <Text style={{textAlign:"center"}}>{props.text}</Text>
            <View style={{height:1, backgroundColor:"black"}}></View>
        </View>
    )
}


export { Divider, DividerWithText };