import {connect} from 'react-redux';
import {RootState, TypedDispatch} from '../../../../redux/store';
import {movieDetailsApiResponse} from '../services/movieDetailsSlice';
import {MovieId} from '../services/types';
import MovieDetails from '../components/MovieDetails';

interface StateProps {
  isMovieDetilsLoading: boolean;
  isMovieDetilsError: boolean;
  isMovieDetilsSucess: boolean;
  movieDetailsData: any;
}

interface DispatchProps {
  getMovieDetails(movieId: MovieId): void;
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    isMovieDetilsLoading: state.movieDetailsSlice.isMovieDetilsLoading,
    isMovieDetilsSucess: state.movieDetailsSlice.isMovieDetilsSucess,
    isMovieDetilsError: state.movieDetailsSlice.isMovieDetilsError,
    movieDetailsData: state.movieDetailsSlice.movieDetailsData,
  };
};

const mapDispatchToProps = (dispatch: TypedDispatch): DispatchProps => {
  return {
    getMovieDetails: movieId => {
      dispatch(movieDetailsApiResponse(movieId));
    },
  };
};

export interface MovieDetailsProps extends StateProps, DispatchProps {}
export const MovieDetailsComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetails);
