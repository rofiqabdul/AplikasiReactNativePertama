/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import SampleComponent from './src/views/SampleComponent';
import StylingReactNativeCompoonent from './src/views/StylingReactNativeComponent';
import { SafeAreaView, ScrollView, View } from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <SampleComponent />
        <StylingReactNativeCompoonent />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
