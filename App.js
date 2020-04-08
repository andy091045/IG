import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AlbumScreen from './src/screens/AlbumScreen';
import DetailScreen from './src/screens/DetailScreen';
import { navigationRef } from './RootNavigation';

const Stack = createStackNavigator();

// function LogoTitle() {
//   return (
//     <View style={styles.headerStyle}>
//       <Image
//         style={styles.camIconStyle}
//         source={require('./src/icon/icons8-webcam-100.png')}
//       />
//       <Image
//         style={{ width: 150, height: 42 }}
//         source={{ uri: 'https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png' }}
//       />
//       <Image
//         style={styles.planeIconStyle}
//         source={require('./src/icon/icons8-paper-plane-100.png')}
//       />
//     </View>
//   );
// }

export default function App() {
  return (
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator>
        {/* <Stack.Screen name="HomeHeader" component={AlbumScreen}
          options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerStyle: {
              headerStyle: { backgroundColor: '#fff' },
              height: 90,
            },
          }}
        /> */}
        <Stack.Screen name="Home" component={AlbumScreen}
          options={{
            headerLeft: () => <TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/")}>
              <Image style={styles.camIconStyle} source={require('./src/icon/icons8-webcam-100.png')} />

            </TouchableOpacity>,
            headerRight: () => <TouchableOpacity onPress={() => navigationRef.current?.navigate("Detail")}>
              <Image style={styles.planeIconStyle} source={require('./src/icon/icons8-paper-plane-100.png')} />

            </TouchableOpacity>,
            headerTitle: (<Image style={styles.igStyle
            } source={{ uri: 'https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png' }} />),
            headerStyle: { backgroundColor: '#fff', height: 80, alignItems: 'center' },
          }}
        />
        <Stack.Screen name="Detail" component={DetailScreen}
          options={{
            headerLeft: () => <TouchableOpacity onPress={() => navigationRef.current?.navigate("Home")}>
              <Image style={styles.camIconStyle} source={require('./src/icon/baseline_keyboard_arrow_left_black_36dp.png')} />
            </TouchableOpacity>,

            headerRight: () => <View style={styles.hr}><TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/")}>
              <Image style={styles.film} source={require('./src/icon/film.png')} />
            </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/")}>
                <Image style={styles.edit} source={require('./src/icon/edit.png')} />
              </TouchableOpacity></View>,

            title: 'Direct',
            headerStyle: { backgroundColor: '#fff' },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  headerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hr: {
    flexDirection: 'row',
  },
  camIconStyle: {
    height: 35,
    width: 35,
    left: 8,
  },
  planeIconStyle: {
    height: 35,
    width: 35,
    right: 8,
  },
  igStyle: {
    height: 30,
    width: 110,
  },
  film: {
    width: 25,
    height: 25,
    marginRight: 20,
  },
  edit: {
    width: 22,
    height: 22,
    marginRight: 20,
  },
});
