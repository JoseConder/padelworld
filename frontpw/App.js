import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // Corrected import
import { useFonts } from "expo-font";


import Login from './screens/Login';
import Home from './screens/Home';
import Register from './screens/Register';
import Menu from './screens/Menu';
import Profile from './screens/Profile';
import Notifications from './screens/Notifications';
import SavedCards from './screens/SavedCards';
import Settings from './screens/Settings';
import Courts from './screens/Courts';
import DeleteAccount from "./components/DeleteAccount";
import CONFIRMACIN from "./components/CONFIRMACIN";





export default function App() {

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

  const Stack = createStackNavigator(); // Corrected function name

  function MyStack() {
      return(
          <Stack.Navigator screenOptions={{
            statusBarStyle: 'dark-content'}}>
              <Stack.Screen name="Login" component={Login} 
              options ={{headerShown: false}}/>
              <Stack.Screen name="Home" component={Home} 
              options ={{headerShown: false}}/>
              <Stack.Screen name="Register" component={Register}
              options ={{headerShown: false}}/>
              <Stack.Screen name="Menu" component={Menu}
              options ={{headerShown: false}}/>
              <Stack.Screen name="Profile" component={Profile}
              options ={{headerShown: false}}/>
              <Stack.Screen name="Notifications" component={Notifications}
              options ={{headerShown: false}}/>
              <Stack.Screen name="SavedCards" component={SavedCards}
              options ={{headerShown: false}}/>
              <Stack.Screen name="Settings" component={Settings}
              options ={{headerShown: false}}/>
              <Stack.Screen name="Courts" component={Courts}
              options ={{headerShown: false}}/>
          </Stack.Navigator>
      );
  }

  return (
      <NavigationContainer>
          <MyStack />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
