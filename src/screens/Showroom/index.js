import React from 'react';
import type { Node } from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderView from '../../components/HeaderView';

const Showroom: () => Node = () => {
  return (
    <View style={styles.containerStyle}>
      <HeaderView
        onChangeText={(text) => {
          console.log(text);
        }}
        title={'Showrooms'} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'white'
  },
});


export default Showroom;