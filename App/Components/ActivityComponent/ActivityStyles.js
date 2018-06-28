import {
  Platform,
  StyleSheet,
  Dimensions
} from 'react-native';

var windowSize = Dimensions.get("window")

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(250, 250, 250)',
  },
  mainContainer: {
    flex: 1,
    elevation: 2,
    shadowOffset: { width: 1, height: 1, },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    flexDirection : "column",
    backgroundColor: 'rgb(250, 250, 250)',
  },
  footerContainer: {
    backgroundColor: 'rgb(250, 250, 250)'
  },
  scrollContainer: {
    padding: 16,
    paddingTop: 300
  },
  header: {
    backgroundColor: 'lightblue',
    position: 'absolute',
    width: windowSize.width,
    top: 0,
    left: 0,
    zIndex: 9999
  }
});
