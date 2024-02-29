import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const HomeStack = () =>{
  return(
    <Stack.Navigator initialRouteName='HomeStack'>
      <Stack.Screen options={{ headerShown: false }} name='HomeStack' component={HomeTab}></Stack.Screen>
      <Stack.Screen name='RegisterStack' component={RegisterScreen}></Stack.Screen>
    </Stack.Navigator>
  )
    
}

const HomeTab = () =>{
  return(
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      <Tab.Screen name="Register" component={RegisterScreen} />
    </Tab.Navigator>
  )
  
}

export default function App() {
  return (
    <NavigationContainer>

      <HomeStack/>

      <StatusBar style="auto" />

    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
