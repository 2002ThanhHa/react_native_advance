
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Splash from './screens/Splash';
import LogIn from './screens/LogIn';
import Main from './screens/Main';
const stack = createNativeStackNavigator()
export default function App() {
  return (
    // <Splash/>
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}}>
        {/* <stack.Screen name="Splash" component={Splash} />
        <stack.Screen name="LogIn" component={LogIn} /> */}
        <stack.Screen name="Main" component={Main} />
      </stack.Navigator>
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
