import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePageComponent} from '../views/App/HomePage/container/homePageContainer';
import {MovieDetailsComponent} from '../views/App/MovieDetailsPage/container/MovieDetailsContainer';

export const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Splash">
      <Stack.Screen name="Home" component={HomePageComponent} />
      <Stack.Screen name="movie_details" component={MovieDetailsComponent} />
    </Stack.Navigator>
  );
};
