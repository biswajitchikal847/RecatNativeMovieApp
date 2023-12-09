import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {MovieDetailsProps as iProps} from '../container/MovieDetailsContainer';
import {NavigationProps, RouteProps} from '../../../../routes/types';
import {useFocusEffect} from '@react-navigation/native';
import {styles} from './MoviesDetails.styles';
import NoData from '../../../../components/Common/Loader/Nodata/NoData';
import Loader from '../../../../components/Common/Loader/Loader';

interface MovieDetailsProps extends iProps {
  navigation: NavigationProps;
  route: RouteProps;
  movieDetailsData: any;
}
const MovieDetails = (props: MovieDetailsProps) => {
  const {
    getMovieDetails,
    isMovieDetilsError,
    isMovieDetilsLoading,
    isMovieDetilsSucess,
    movieDetailsData,
    navigation,
    route,
  } = props;
  const {movie_id} = route.params;

  useFocusEffect(
    React.useCallback(() => {
      getMovieDetails(movie_id);
    }, []),
  );

  console.log(movieDetailsData, 'movieDetailsData');

  return (
    <>
      {isMovieDetilsLoading ? (
        <Loader color="blue" size="small" />
      ) : movieDetailsData ? (
        <ScrollView style={styles.container}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movieDetailsData.poster_path}`,
            }}
            style={styles.poster}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{movieDetailsData.title}</Text>
            <Text style={styles.rating}>
              Rating: {movieDetailsData.vote_average}
            </Text>
            <Text style={styles.rating}>
              Release Date: {movieDetailsData.release_date}
            </Text>
            <Text style={styles.rating}>
              Runtime: {movieDetailsData.rating} minutes
            </Text>
            <Text style={styles.rating}>
              Genres:{' '}
              {movieDetailsData.genres
                .map((genre: any) => genre.name)
                .join(', ')}
            </Text>
            <Text style={styles.rating}>
              Languages:{' '}
              {movieDetailsData.spoken_languages
                .map((language: any) => language.name)
                .join(', ')}
            </Text>
            <Text style={styles.overview}>{movieDetailsData.overview}</Text>
            <Text style={styles.tagline}>{movieDetailsData.tagline}</Text>
            <Text style={styles.homepage}>
              Go to Homepage: {movieDetailsData.homepage}
            </Text>
          </View>
        </ScrollView>
      ) : (
        <NoData />
      )}
    </>
  );
};

export default MovieDetails;
