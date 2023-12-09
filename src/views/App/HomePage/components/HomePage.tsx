import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HomePageProps as iProps} from '../container/homePageContainer';
import {NavigationProps} from '../../../../routes/types';
import {useFocusEffect} from '@react-navigation/native';
import {styles} from './HomePage.styles';
import Loader from '../../../../components/Common/Loader/Loader';
import NoData from '../../../../components/Common/Loader/Nodata/NoData';

interface HomePageProps extends iProps {
  navigation: NavigationProps;
  movieData: any;
}

const HomePage = (props: HomePageProps) => {
  const {navigation, isLoading, isError, isSucess, movieData, getHomeRequest} =
    props;
  const [searchQuery, setSearchQuery] = useState('');
  const [MoviesData, setMoviesData] = useState(movieData);

  useFocusEffect(
    React.useCallback(() => {
      getHomeRequest();
    }, []),
  );

  useEffect(() => {
    setMoviesData(movieData);
  }, [movieData]);
  const handleonPress = (movie_id: number) => {
    navigation.navigate('movie_details', {movie_id});
  };

  console.log(MoviesData, 'MoviesData');

  const handleMovieSerach = React.useCallback(
    (data: string) => {
      if (data) {
        setSearchQuery(data);
        const filteredMovies = MoviesData?.filter((movie: any) =>
          movie.title.toLowerCase().includes(data.toLowerCase()),
        );
        setMoviesData(filteredMovies);
        console.log(MoviesData, 'filteredMovies');
      } else {
        setSearchQuery('');
        setMoviesData(movieData);
      }
    },
    [searchQuery, movieData],
  );

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search movies..."
        value={searchQuery}
        onChangeText={text => handleMovieSerach(text)}
      />
      {isLoading ? (
        <Loader size="large" color="blue" />
      ) : MoviesData?.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {MoviesData?.map((ele: any, i: number) => {
            return (
              <TouchableOpacity onPress={() => handleonPress(ele.id)} key={i}>
                <View style={styles.card}>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${ele.poster_path}`,
                    }}
                    style={styles.poster}
                  />
                  <View style={styles.details}>
                    <Text style={styles.title}>{ele.title}</Text>
                    <Text style={styles.rating}>
                      Rating: {ele.vote_average}
                    </Text>
                    <Text style={styles.language}>
                      Language: {ele.original_language}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      ) : (
        <NoData />
      )}
    </View>
  );
};

export default HomePage;
