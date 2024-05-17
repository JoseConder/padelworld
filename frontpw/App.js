import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // Corrected import

import Login from './screens/Login';
import Home from './screens/Home';
import Register from './screens/Register';
import Menu from './screens/Menu';
export default function App() {

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
