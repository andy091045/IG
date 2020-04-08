import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from "react-native";

const AlbumDetail = ({ album, navigation }) => {
    return (
        //上面那一條啦幹
        <View style={styles.cardContainerStyle}>
            <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
                <Image
                    style={styles.thumbnailStyle}
                    source={{
                        uri: album.thumbnail_image
                    }}
                />
                <View style={styles.headerContentStyle}>
                    <Text style={styles.TextStyle1}>{album.title}</Text>
                </View>
                <View style={styles.headerContentStyle}>
                    <Image
                        style={styles.icon1}
                        source={require('../icon/baseline_more_horiz_black_24dp.png')}
                    />
                </View>
            </View>

            <View style={styles.cardSectionStyle}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Detail', album)}
                >
                    <Image
                        style={styles.imageStyle}
                        source={{
                            uri: album.image
                        }}
                    />
                </TouchableOpacity>
                <View style={styles.iconBarStyle}>
                    <Image
                        style={styles.icon2}
                        source={require('../icon/icons8-heart-100.png')}
                    />
                    <Image
                        style={styles.icon2}
                        source={require('../icon/icons8-speech-bubble-100.png')}
                    />
                    <Image
                        style={styles.icon2}
                        source={require('../icon/icons8-paper-plane-100.png')}
                    />
                    <Image
                        style={styles.icon3}
                        source={require('../icon/icons8-bookmark-100.png')}
                    />
                </View>
                <View style={styles.TextTypeStyle}>
                    <Text style={styles.TextStyle2}>{album.like}</Text>
                </View>
                <View style={styles.TextTypeStyle}>
                    <Text style={styles.TextStyle3}>{album.content}</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    thumbnailContainerStyle: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: 'center',
    },
    thumbnailStyle: {
        borderRadius: 50,
        height: 50,
        width: 50,
        margin: 5
    },
    headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
        paddingLeft: 10,

    },
    cardContainerStyle: {
        // borderWidth: 1,
        // borderColor: "#ddd",
        // shadowColor: "#000",
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    cardSectionStyle: {
        padding: 5,
        backgroundColor: "#fff",
        // borderColor: "#ddd",
        // borderBottomWidth: 1
    },
    imageStyle: {
        height: 300,
        width: null
    },
    TextTypeStyle: {
        marginTop: 10,
        marginLeft: 5,
    },
    TextStyle1: {
        fontSize: 15,
        fontWeight: "bold",
    },
    TextStyle2: {
        fontSize: 13,
        fontWeight: "bold",
    },
    TextStyle3: {
        fontSize: 15,
    },
    iconBarStyle: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: 'center',
        marginTop: 10,
    },
    icon1: {
        marginLeft: 130,
        width: 30,
        height: 30,
    },
    icon2: {
        marginLeft: 5,
        marginRight: 10,
        width: 25,
        height: 25
    },
    icon3: {
        marginLeft: 240,
        width: 25,
        height: 25,
    },

});

export default AlbumDetail;