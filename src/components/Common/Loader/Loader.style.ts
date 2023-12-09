import {StyleSheet} from 'react-native';
import {
  fontScale,
  heightScale,
  widthScale,
} from '../../../helper/ResponsiveUtils';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  indicatorWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
  },
  indicator: {
    marginTop: heightScale(150),
    width: widthScale(300),
    padding: widthScale(12),
    borderRadius: widthScale(12),
    height: heightScale(300),
    marginLeft: widthScale(60),
  },
  indicatorText: {
    fontSize: fontScale(18),
    marginTop: heightScale(12),
  },
});
