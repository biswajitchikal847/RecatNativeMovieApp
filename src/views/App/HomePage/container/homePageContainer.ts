import {connect} from 'react-redux';
import {RootState, TypedDispatch} from '../../../../redux/store';
import {homePageApiResponse} from '../services/homePageSlice';
import HomePage from '../components/HomePage';

interface StateProps {
  isLoading: boolean;
  isError: boolean;
  isSucess: boolean;
  movieData: any;
}

interface DispatchProps {
  getHomeRequest(): void;
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    isLoading: state.homePageSlice.isLoading,
    isSucess: state.homePageSlice.isSucess,
    isError: state.homePageSlice.isError,
    movieData: state.homePageSlice.movieData,
  };
};

const mapDispatchToProps = (dispatch: TypedDispatch): DispatchProps => {
  return {
    getHomeRequest: () => {
      dispatch(homePageApiResponse());
    },
  };
};

export interface HomePageProps extends StateProps, DispatchProps {}
export const HomePageComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
