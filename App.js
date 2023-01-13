import AppNavigator from './app/AppNavigator';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux';
import { store } from './app/redux/Store';
const navigationRef = React.createRef();

export const navigate = (name, params) => {
  navigationRef.current && navigationRef.current.navigate(name, params);
}

export default function App() {
  return (

    <Provider store={store} >

      <NavigationContainer ref={navigationRef}>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
