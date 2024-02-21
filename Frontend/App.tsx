/* eslint-disable react/react-in-jsx-scope */
import LoginPage from './src/Components/LoginPage';
import HomePage from './src/Components/HomePage';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './src/Components/SignUp';
import Welcome from './src/Components/Welcome';
import LeavePage from './src/Components/LeavePage';
import PresentPage from './src/Components/PresentPage';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="sign" component={SignUp} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="leave" component={LeavePage} />
        <Stack.Screen name="presentPage" component={PresentPage} />
        {/* <Stack.Screen name='form' component={ApplyForm}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
