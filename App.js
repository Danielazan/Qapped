import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './src/Screens/Register';
import GlobalState from "./src/contexts/index"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <GlobalState>
       <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        /> */}
        <Stack.Screen name="Home" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
   </GlobalState>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#fff',
//     // alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
