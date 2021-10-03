import React from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native"; 
import { Divider } from "./divider";
import AnimatedNumbers from "react-native-animated-numbers";
import colours from "../assets/colours";

const RiskPage = (props) => {
    const { cases } = props.route.params
    const [ animateToNumber, setAnimateToNumber ] = React.useState(0);
    
    const increase = () => {
        setAnimateToNumber(animateToNumber + 1);
    }

    return (
        <ScrollView>
            <View style={styles.header}>
                <AnimatedNumbers
                    includeComma
                    animateToNumber={cases}
                    fontStyle={styles.cases}
                />
                <Divider lPad={0}/>
                <Text style={styles.headerText}>cases in England</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        flex:1,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height - 0.6 * Dimensions.get("window").height,
        backgroundColor: colours.red
    },
    cases: {
        color: "white",
        fontSize: 50,
        fontWeight: "400"
    },
    headerText: {
        color: "white",
        fontSize: 30,
    }
})

export default RiskPage;