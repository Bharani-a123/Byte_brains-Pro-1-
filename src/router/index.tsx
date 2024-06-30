import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../views/register/index';
import {routes} from './routes';

const Stack = createNativeStackNavigator();

function RouterApp() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen
        options={{headerShown: false}}
        name={routes.Home}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

export default RouterApp;
