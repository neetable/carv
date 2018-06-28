import {
    Platform,
    StyleSheet,
    Dimensions
  } from 'react-native';

  var windowSize = Dimensions.get("window")

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      
      //justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'rgb(43,153, 225)',
    },
    imageView: {
      marginTop: windowSize.height * 0.27,
      marginLeft:128,
      marginRight: 127
      
    },
    image: {
      width: 129,
      height: 29
    },

    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },

    getStartedBtn: {
        backgroundColor:"white",
        width : windowSize.width * 0.744,
        marginTop: windowSize.height * 0.067,
        borderRadius: 10
    },
    getStartedText: {
      fontSize: windowSize.width * 0.045,
      paddingTop:windowSize.width *0.045,
      paddingBottom:windowSize.width *0.045,  
      fontWeight: "bold",
      textAlign: "center",
      color: 'rgb(43, 153, 225)',

    },
    aleadyUsingItText: {
      color: 'white'
    },
    loginText: {
      color: "white",
      fontWeight: "bold"
    },
    loginView: {
      marginTop: windowSize.height * 0.067,
      flexDirection: "row"
    },
    fittingInstructionView: {
        width: 230,
        padding: 15,
        borderWidth: 0.3,
        borderColor: "white",
        marginTop : windowSize.height * 0.28,
        // backgroundColor:"white",
        // width: 200,
        // padding: 20,
        borderRadius: 5
    },
    fittingInstructionText: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 20,
      
      
    }
  });
  