import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Navigator from './src/components/Navigator';
import Constant from './src/config/Constant'

const App: () => Node = () => {

  return (
    <View style={styles.containerStyle}>
      <StatusBar backgroundColor={Constant.COLOR_LIGHT_GRAY} barStyle='dark-content'/>
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  },
});

export default App;
