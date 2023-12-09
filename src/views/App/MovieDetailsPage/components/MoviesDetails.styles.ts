import {StyleSheet} from 'react-native';
import {
  fontScale,
  heightScale,
  widthScale,
} from '../../../../helper/ResponsiveUtils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: widthScale(20),
  },
  poster: {
    width: '100%',
    height: heightScale(300),
    resizeMode: 'cover',
    borderRadius: widthScale(8),
  },
  detailsContainer: {
    padding: widthScale(15),
  },
  title: {
    fontSize: fontScale(24),
    fontWeight: 'bold',
    marginBottom: heightScale(10),
  },
  rating: {
    fontSize: fontScale(16),
    color: 'gray',
  },

  overview: {
    fontSize: fontScale(18),
    marginTop: heightScale(10),
  },
  tagline: {
    fontSize: fontScale(16),
    marginTop: heightScale(10),
  },
  homepage: {
    fontSize: fontScale(16),
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: heightScale(10),
  },
});
