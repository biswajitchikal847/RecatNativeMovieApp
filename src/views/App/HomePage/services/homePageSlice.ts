import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {HomepPageInitialStateDTO} from './types';
import {HomePgaeRequest} from './homePage.Request';

export const initialState: HomepPageInitialStateDTO = {
  isLoading: false,
  isError: false,
  isSucess: false,
  movieData: null,
};

export const homePageApiResponse = createAsyncThunk('homepage', () => {
  return HomePgaeRequest()
    .then((res: any) => {
      return res?.data?.results;
    })
    .catch(function (e: any) {
      throw e;
    });
});

export const homePageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(homePageApiResponse.pending, state => {
      (state.isLoading = true), (state.isError = false);
      state.isSucess = false;
    });
    builder.addCase(
      homePageApiResponse.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = false;
        state.isSucess = true;
        state.movieData = action.payload;
      },
    );
    builder.addCase(
      homePageApiResponse.rejected,
      (state, action: AnyAction) => {
        state.isLoading = false;
        state.isError = true;
        state.isSucess = false;
        state.isError = action?.error?.message || 'Something went wrong';
      },
    );
  },
});

export default homePageSlice.reducer;
export const {reset} = homePageSlice.actions;
