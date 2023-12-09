import {View, Image} from 'react-native';
import React from 'react';
import {styles} from './NoData.styles';
import {Nodatafound} from '../../../../assets/Images';

export default function NoData() {
  return (
    <View style={styles.Container404}>
      <Image style={styles.img} resizeMode="cover" source={Nodatafound} />
    </View>
  );
}
