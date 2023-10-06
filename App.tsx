import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Design2LoginScreen} from "./src/screens/LoginScreensDesign2/Design2LoginScreen";
import {Design2GetStartedScreen} from "./src/screens/LoginScreensDesign2/Design2GetStartedScreen";
import { VerificationCodeScreen } from './src/screens/VerificationCodeScreen';
import {Design3Screen} from "./src/screens/Design3";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Design3Screen'}>
          <Stack.Screen name="Design2GetStarted" options={{headerShown: false}} component={Design2GetStartedScreen} />
          <Stack.Screen name={'Design2Login'} options={{headerShown: false, }} component={Design2LoginScreen} />
          <Stack.Screen name="Verification" options={{headerShown: false}} component={VerificationCodeScreen} />
          <Stack.Screen name="Design3Screen" options={{headerShown: false}} component={Design3Screen} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}