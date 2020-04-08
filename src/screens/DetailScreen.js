import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import albumData from '../json/albums.json';

const DetailScreen = () => {
    return (
        <ScrollView>
            <View style={styles.v1}>
                <Image style={styles.photoStyle} source={{ uri: 'https://images.chinatimes.com/newsphoto/2019-09-25/900/20190925001292.jpg' }}
                />
                <View style={styles.v11}>
                    <Text style={styles.text1}>{albumData.albumList[0].text1}</Text>
                    <Text style={styles.text11}>{albumData.albumList[0].text11}</Text>
                </View>
                <Image style={styles.camera} source={require('../icon/icons8-camera-32.png')} />
            </View>

            <View style={styles.v1}>
                <Image style={styles.photoStyle} source={{ uri: 'https://images.chinatimes.com/newsphoto/2019-09-25/900/20190925001292.jpg' }}
                />
                <View style={styles.v11}>
                    <Text style={styles.text1}>{albumData.albumList[1].text1}</Text>
                    <Text style={styles.text11}>{albumData.albumList[1].text11}</Text>
                </View>
                <Image style={styles.camera} source={require('../icon/icons8-camera-32.png')} />
            </View>

            <View style={styles.v1}>
                <Image style={styles.photoStyle} source={{ uri: 'https://images.chinatimes.com/newsphoto/2019-09-25/900/20190925001292.jpg' }}
                />
                <View style={styles.v11}>
                    <Text style={styles.text1}>{albumData.albumList[2].text1}</Text>
                    <Text style={styles.text11}>{albumData.albumList[2].text11}</Text>
                </View>
                <Image style={styles.camera} source={require('../icon/icons8-camera-32.png')} />
            </View>


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    v1: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    v11: {
        marginLeft: 20,
    },
    photoStyle: {
        marginLeft: 10,
        width: 60,
        height: 60,
        borderRadius: 40,
    },
    camera: {
        marginLeft: 140,
    },
    text1: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    text11: {
        fontSize: 15,
        color: '#8c8c8c',
    }
});

export default DetailScreen