import React from 'react';
import {View, Image} from 'react-native';

const homeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Image
        style={{height: '60%', width: '100%', resizeMode: 'contain'}}
        source={{
          uri: '/Users/gurisaini/Documents/Calculator/components/assets/makeup.png',
        }}></Image>
       
    </View>

  );
};
export default homeScreen;
