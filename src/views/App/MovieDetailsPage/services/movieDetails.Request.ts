import {axios} from '../../../../apis/setup.interceptor';
import {MovieId} from './types';

export const GetMovieDetailsRequest = (movieId: MovieId) => {
  return axios({
    method: 'GET',
    url: `/${movieId}`,
    data: {},
  });
};
