
import React from 'react';
import { Text, View,Image } from 'react-native';

export default class Facebook extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Image
            style={{width: 306, alignSelf:'center',
    height: 108,marginTop:200}}
        source={{
          uri: 'https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-2005.jpg',
        }}
      />
        </View>
      );
    }
  }