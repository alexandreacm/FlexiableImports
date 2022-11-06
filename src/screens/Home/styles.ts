import { StyleSheet, StatusBar, Platform } from 'react-native';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CDCDCD',
  },
  statusBar: {
    height: Platform.OS === 'ios' ? STATUSBAR_HEIGHT : 0,
  },
});
