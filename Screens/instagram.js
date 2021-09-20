
import React from 'react';
import { Text, View,Image} from 'react-native';

export default class Instagram extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{width: 306, alignSelf:'center',marginTop:200,
    height: 108,}}
        source={{
          uri: 'https://1000logos.net/wp-content/uploads/2017/02/ig-logo.png',
        }}
      />
        </View>
      );
    }
  }