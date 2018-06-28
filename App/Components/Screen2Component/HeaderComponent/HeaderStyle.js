import {
    Platform,
    StyleSheet,
    Dimensions
  } from 'react-native';

  var windowsize = Dimensions.get('window');
export default HeaderStyle = StyleSheet.create({
    container: {
      flex: 1,
      
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'rgb(43,153, 225)',
    },
    imageView: {
      
      
    },
    image: {
      width: windowsize.width,
      height: 120
    },
})