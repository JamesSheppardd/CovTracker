import React from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native"; 
import { Divider } from "./divider";
import colours from "../assets/colours";
import ukCases from "../assets/data/ukCases.json";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import testingSites from "../assets/data/testing.json";


const RiskPage = (props) => {
    const { cases } = props.route.params

    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.headerText}>{ukCases.newCases} confirmed new cases in the UK in the past 24 hours</Text>
            </View>
            <Text style={styles.qText}>What should I do?</Text>
            <Divider lPad={0}/>
            <Text style={styles.text}>
                The UK government is advising that due to there still being a high risk of getting COVID-19, even if you are double vaccinated, you should remain aware
                of your risk when in a large group, but you can go about your daily routines such as shopping or work without any restrictions.
            </Text>

            <Text style={styles.qText}>What about masks?</Text>
            <Divider lPad={0}/>
            <Text style={styles.text}>
                Due to there still being a high risk of transmission, it is required that on all public transport you must wear a mask, and it is highly recommended 
                to do so if you feel the need to. However, it is no longer required to wear masks in shops, restaurants, places of work (unless otherwise specified) 
                or in schools.
            </Text>

            <Text style={styles.qText}>Should I get tested?</Text>
            <Divider lPad={0}/>
            <Text style={styles.text}>
                It is not necessary under current restrictions, unless you have been in close contact with someone who has recently tested positive, and if that is 
                the case, go to one of these testing sites near you:
            </Text>
            <MapView 
                style={styles.map}
                showsUserLocation={false}
            >
                {testingSites.sites.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                        title={marker.title}
                        description={"Testing site"}
                    />
                ))}
            </MapView>
            
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
        fontWeight: "400",
        fontFamily: "Futura"
    },
    headerText: {
        color: "white",
        fontSize: 30,
        fontFamily: "Futura"
    },
    qText: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 20,
        fontFamily: "Futura"
    },
    text: {
        fontSize: 15,
        fontFamily: "Futura"

    },
    map: {
        flex:1,
        height: Dimensions.get("window").height - 0.5 * Dimensions.get("window").height,
        width:Dimensions.get("window").width
    }
})

export default RiskPage;