import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import RouterApp from './src/router';

export default function App() {
  return (
    <NavigationContainer>
      <RouterApp />
    </NavigationContainer>
  );
}
