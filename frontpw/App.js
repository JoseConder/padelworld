import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // Corrected import

import Hola from './screens/Hola';
import Home from './screens/Home';
export default function App() {

  const Stack = createStackNavigator(); // Corrected function name

  function MyStack() {
      return(
          <Stack.Navigator>
              <Stack.Screen name="Hola" component={Hola} 
              options ={{headerShown: false}}/>
              <Stack.Screen name="Home" component={Home} 
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
