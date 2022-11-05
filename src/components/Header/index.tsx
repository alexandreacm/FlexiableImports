import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

function Header() {
  return (
    <View style={styles.container_header}>
      <Text>HEADER</Text>
    </View>
  );
}

export default Header;