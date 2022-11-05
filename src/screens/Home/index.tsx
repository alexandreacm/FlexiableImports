import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import Header from '@components/Header';

import { styles } from './styles';

type Props = {
  backgroundColor: any;
};

export const THEME_COLOR = '#285E29';

function MyStatusBar({ backgroundColor, ...props }: Props) {
  return (
    <SafeAreaView style={styles.statusBar}>
      <StatusBar backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  );
}

function Home() {
  return (
    <>
      <MyStatusBar backgroundColor={THEME_COLOR} barStyle="dark-content" />
      <View>
        <Header />
      </View>
    </>
  );
}

export default Home;
