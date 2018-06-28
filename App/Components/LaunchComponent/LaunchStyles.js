import {
  Platform,
  StyleSheet,
  Dimensions
} from 'react-native';

import helpers from '../Helper'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(43,153, 225)',
  },
  imageView: {
    width: helpers.getSizeByWidth(120),
    height: helpers.getSizeByHeight(29),
    marginTop: helpers.getSizeByHeight(200)
  },
  getStartedBtn: {
    backgroundColor: "white",
    width: helpers.getSizeByWidth(279),
    height: helpers.getSizeByHeight(52),
    marginTop: helpers.getSizeByHeight(42),
    borderRadius: 6,
  },
  getStartedText: {
    fontSize: helpers.getSizeByHeight(17),
    color: 'rgb(43, 153, 225)',

  },
  colorWhite: {
    color: 'white'
  },
  bold: {
    fontWeight: "bold"
  },
  loginView: {
    marginTop: helpers.getSizeByHeight(32),
    flexDirection: "row"
  },
  fittingInstructionView: {
    width: helpers.getSizeByWidth(279),
    marginTop: helpers.getSizeByHeight(188),
    marginBottom: helpers.getSizeByHeight(48),
    height: helpers.getSizeByHeight(52),
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.6)",
    borderRadius: 6,
  },
  fittingInstructionText: {
    textAlign: "center",
    fontSize: helpers.getSizeByHeight(17),
  },
  itemCenterAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontSizeSmall: {
    fontSize: 14
  }
});
