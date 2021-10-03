import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native"; 
import { Divider } from "./divider";
import { RoundedRiskButton, RoundedNewsButton } from "./rounded-button";

const LandingPage = (props) => {

    return (
        <ScrollView style={{backgroundColor:"white"}}>
            <RoundedRiskButton risk="High" navigation={props.navigation}/>

            <Text>Updates from England</Text>
            <Divider lPad={5}/>

            <ScrollView horizontal={true}>
                <View style={{height:200, flexDirection:"row", justifyContent: "space-between"}}>
                    <RoundedNewsButton value={0} area="gb" navigation={props.navigation}/>
                    <RoundedNewsButton value={1} area="gb" navigation={props.navigation}/>
                    <RoundedNewsButton value={2} area="gb" navigation={props.navigation}/>
                </View>
            </ScrollView>

            <Text>Latest from around the world</Text>
            <Divider lPad={5}/>

            <ScrollView horizontal={true}>
                <View style={{height:200, flexDirection:"row", justifyContent: "space-evenly"}}>
                    <RoundedNewsButton value={0} area="world" navigation={props.navigation}/>
                    <RoundedNewsButton value={1} area="world" navigation={props.navigation}/>
                    <RoundedNewsButton value={2} area="world" navigation={props.navigation}/>
                    <RoundedNewsButton value={3} area="world" navigation={props.navigation}/>
                    <RoundedNewsButton value={4} area="world" navigation={props.navigation}/>
                    <RoundedNewsButton value={5} area="world" navigation={props.navigation}/>
                    <RoundedNewsButton value={7} area="world" navigation={props.navigation}/>
                    <RoundedNewsButton value={8} area="world" navigation={props.navigation}/>
                </View>
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "flex-start",
        justifyContent: "center",
        paddingTop: "5%",
    },
    text: {
        fontSize: 20
    }
});

export default LandingPage;