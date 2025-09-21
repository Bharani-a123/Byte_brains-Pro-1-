import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes';

import LoginScreen from '../components/login';
import SignUpScreen from '../views/signup';
import ForgotPasswordScreen from '../views/forgotpassword';
import OTPNumberScreen from '../views/otpnumber';
import ResetScreen from '../views/reset';
import HomePageScreen from '../views/homepage';
import ContentStudioScreen from '../views/contentstudio';
import PublishScreen from '../views/publish';
import MarketIntelligenceScreen from '../views/marketinteli';
import ProfileScreen from '../views/profile'
const Stack = createNativeStackNavigator();

function RouterApp() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routes.Login}>
      <Stack.Screen name={routes.Login} component={LoginScreen} />
      <Stack.Screen name={routes.SignUp} component={SignUpScreen} />
      <Stack.Screen
        name={routes.ForgotPassword}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name={routes.OTPNumber} component={OTPNumberScreen} />
      <Stack.Screen name={routes.Reset} component={ResetScreen} />
      <Stack.Screen name={routes.HomePage} component={HomePageScreen} />
      <Stack.Screen
        name={routes.ContentStudio}
        component={ContentStudioScreen}
      />
      <Stack.Screen name={routes.Publish} component={PublishScreen} />
      <Stack.Screen
        name={routes.MarketIntelligence}
        component={MarketIntelligenceScreen}
      />
      <Stack.Screen name={routes.Profile} component={ProfileScreen}/>
    </Stack.Navigator>
  );
}

export default RouterApp;
