import {combineReducers} from '@reduxjs/toolkit';
import homePageSlice from '../views/App/HomePage/services/homePageSlice';
import movieDetailsSlice from '../views/App/MovieDetailsPage/services/movieDetailsSlice';

export const rootReducer = combineReducers({
  homePageSlice: homePageSlice,
  movieDetailsSlice: movieDetailsSlice,
});
