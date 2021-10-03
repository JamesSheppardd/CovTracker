import React from "react";
import { StyleSheet, View, Text, ScrollView, Image, Dimensions } from "react-native"; 
import { Divider } from "./divider";
import { RoundedRiskButton, RoundedNewsButton } from "./rounded-button";
import gbNewsFile from "../assets/data/gbNews.json";
import worldNewsFile from "../assets/data/worldNews.json";

import decideDate from "./date";

const NewsPage = (props) => {
    const { value, area } = props.route.params;
    // determine which news file to read from
    const newsFile = area === "gb" ? gbNewsFile : worldNewsFile;

    const date = newsFile.articles[value].publishedAt.substring(0, 10);
    const published = decideDate(date);

    const data = {
        source: newsFile.articles[value].source.name,
        author: newsFile.articles[value].author,
        title: newsFile.articles[value].title,
        description: newsFile.articles[value].description,
        url: newsFile.articles[value].url,
        image: newsFile.articles[value].urlToImage,
        published: published,
        content: newsFile.articles[value].content
    }
    
    return (
        <ScrollView>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.byLine}>By {data.author} from {data.source} | {data.published}</Text>
            <Divider lPad={0} />
            <Image 
                source={{uri: data.image}}
                style={{width: Dimensions.get("window").width, height: 200}}
            />
            <Text style={styles.content}>{data.description}</Text>
            <Divider lPad={0} />
            <Text style={styles.content}>{data.content}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "Futura"

    },
    byLine: {
        fontSize: 10,
        fontWeight: "200",
        color: "#434343",
        fontFamily: "Futura"
    },
    content: {
        fontSize: 20,
        fontFamily: "Futura"
    }
})

export default NewsPage;