import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AlbumScreen from './src/screens/AlbumScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <View style={styles.headerStyle}>
      <Image
        style={styles.camIconStyle}
        source={require('./src/icon/icons8-webcam-100.png')}
      />
      <Image
        style={{ width: 150, height: 42 }}
        source={{ uri: 'https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png' }}
      />
      <Image
        style={styles.planeIconStyle}
        source={require('./src/icon/icons8-paper-plane-100.png')}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeHeader" component={AlbumScreen}
          options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerStyle: {
              height: 90,
            },
          }}
        />
        <Stack.Screen name="Home" component={AlbumScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  camIconStyle: {
    height: 35,
    width: 35,
    marginRight: 80,
  },
  planeIconStyle: {
    height: 35,
    width: 35,
    marginLeft: 80,
  },
});
