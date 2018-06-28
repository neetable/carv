import {
  Platform,
  StyleSheet,
  Dimensions
} from 'react-native';

import helpers from '../../Helper'
export default HeaderStyle = StyleSheet.create({
  container: {
    elevation: 2,
    shadowOffset: { width: 2, height: 2, },
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOpacity: 1.0,
  },
  headerText: {
    marginTop: helpers.getSizeByHeight(32),
    marginLeft: helpers.getSizeByHeight(24),
    marginBottom: helpers.getSizeByHeight(8),
    textAlign: "left",
    fontSize: helpers.getSizeByHeight(32),
  },
})