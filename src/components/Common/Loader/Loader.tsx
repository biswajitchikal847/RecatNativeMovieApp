import React from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import {styles} from './Loader.style';
export interface LoaderProps {
  size: 'large' | 'small';
  color: string;
}
export default function Loader(props: LoaderProps) {
  const {size, color} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.indicatorWrapper}>
        <ActivityIndicator size={size} style={styles.indicator} color={color} />
      </View>
    </SafeAreaView>
  );
}
