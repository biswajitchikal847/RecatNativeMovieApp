import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {MovieDetailsInitialStateDTO, MovieId} from './types';
import {GetMovieDetailsRequest} from './movieDetails.Request';

export const initialState: MovieDetailsInitialStateDTO = {
  isMovieDetilsLoading: false,
  isMovieDetilsError: false,
  isMovieDetilsSucess: false,
  movieDetailsData: null,
};

export const movieDetailsApiResponse = createAsyncThunk(
  'getmovieDetails',
  (movieId: MovieId) => {
    return GetMovieDetailsRequest(movieId)
      .then((res: any) => {
        return res?.data;
      })
      .catch(function (e: any) {
        throw e;
      });
  },
);

export const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(movieDetailsApiResponse.pending, state => {
      (state.isMovieDetilsLoading = true), (state.isMovieDetilsError = false);
      state.isMovieDetilsSucess = false;
    });
    builder.addCase(
      movieDetailsApiResponse.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isMovieDetilsLoading = false;
        state.isMovieDetilsError = false;
        state.isMovieDetilsSucess = true;
        state.movieDetailsData = action.payload;
      },
    );
    builder.addCase(
      movieDetailsApiResponse.rejected,
      (state, action: AnyAction) => {
        state.isMovieDetilsLoading = false;
        state.isMovieDetilsError = true;
        state.isMovieDetilsSucess = false;
        state.isMovieDetilsError =
          action?.error?.message || 'Something went wrong';
      },
    );
  },
});

export default movieDetailsSlice.reducer;
export const {reset} = movieDetailsSlice.actions;
