import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

function SampleComponent(): JSX.Element {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#00d2d3'}} />
      <View>
        <Text>Ini Komponen Home</Text>
      </View>
      <Images />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
}

function Images(): JSX.Element {
  return (
    <Image
      source={{uri: 'https://picsum.photos/100'}}
      style={{width: 100, height: 100}}
    />
  );
}

class BoxGreen extends Component {
  render() {
    return <Text>Ini class komponen</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://picsum.photos/100'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'blue', fontSize: 24}}>Ini profile</Text>
      </View>
    );
  }
}

export default SampleComponent;
