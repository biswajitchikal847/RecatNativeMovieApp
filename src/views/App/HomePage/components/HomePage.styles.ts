import {StyleSheet} from 'react-native';
import {
  fontScale,
  heightScale,
  widthScale,
} from '../../../../helper/ResponsiveUtils';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: widthScale(20),
  },
  card: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    margin: heightScale(10),
    padding: widthScale(10),
    backgroundColor: '#fff',
  },
  poster: {
    width: widthScale(80),
    height: heightScale(120),
    borderRadius: widthScale(8),
  },
  details: {
    marginLeft: widthScale(10),
    flex: 1,
  },
  title: {
    fontSize: fontScale(16),
    fontWeight: 'bold',
  },
  rating: {
    marginTop: heightScale(5),
    color: 'gray',
  },
  language: {
    marginTop: heightScale(5),
    color: 'gray',
  },
  searchInput: {
    height: heightScale(40),
    borderColor: 'gray',
    borderWidth: widthScale(1),
    borderRadius: widthScale(8),
    marginBottom: heightScale(10),
    paddingLeft: widthScale(10),
  },
});
