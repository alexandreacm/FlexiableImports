import { StyleSheet, StatusBar } from 'react-native';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CDCDCD',
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
