const Stack = createNativeStackNavigator();

import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // Corrected import
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";



import Hola from './screens/Hola';
import Home from './screens/Home';
import Men from './screens/Men';
import Calendario from './screens/Calendario';
import Canchas from './screens/Canchas';
import Notificaciones from './screens/Notificaciones';
 

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Hola"
              component={Hola}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Canchas"
              component={Canchas}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Men"
              component={Men}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notificaciones"
              component={Notificaciones}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Calendario"
              component={Calendario}
              options={{ headerShown: false }}
            />

          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;