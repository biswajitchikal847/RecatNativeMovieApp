/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox, SafeAreaView} from 'react-native';
import {NotifierWrapper} from 'react-native-notifier';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {Routes} from './src/routes/index.routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
function App(): JSX.Element {
  LogBox.ignoreLogs([
    'Encountered',
    'Remote debugger',
    'Each child',
    'ViewPropTypes',
    'VirtualizedLists',
  ]);
  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
        <Provider store={store}>
          <NavigationContainer>
            <NotifierWrapper>
              <Routes />
            </NotifierWrapper>
          </NavigationContainer>
        </Provider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
