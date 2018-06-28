import {
    Platform,
    StyleSheet,
    Dimensions
  } from 'react-native';

  var windowSize = Dimensions.get("window")

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(43,153, 225)',
    },
    screen2Container: {
        flex: 10,
        backgroundColor: 'rgb(250, 250, 250)'
    },
    headerContainer: {
      flex: 3
    },
    mapContainer: {
      // flex: 10
      flex: 10
    },
    footerContainer: {
      flex: 1,
      backgroundColor: 'rgb(250, 250, 250)'
    },
  });
  