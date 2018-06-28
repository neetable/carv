import {
  Platform,
  StyleSheet,
} from 'react-native';

import helpers from '../../Helper'

export default BodyStyle = StyleSheet.create({
  mapCardContainer: {
    backgroundColor: "white",
    borderRadius: helpers.getSizeByHeight(16),
    marginTop: helpers.getSizeByHeight(8),
    marginRight: helpers.getSizeByWidth(2),
    marginLeft: helpers.getSizeByWidth(2),
    marginBottom: helpers.getSizeByHeight(8),
    elevation: 2,
    shadowOffset: { width: 1, height: 1, },
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },
  headerView: {
    paddingLeft: helpers.getSizeByWidth(16),
    paddingRight: helpers.getSizeByWidth(16),
    paddingTop: helpers.getSizeByHeight(20),
    paddingBottom: helpers.getSizeByHeight(16),
  },
  headerTitleView: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerTitle: {
    fontSize: helpers.getSizeByHeight(20),
    marginRight: helpers.getSizeByWidth(4),
    color: 'rgb(49, 66, 88)',
    fontWeight: 'bold'
  },
  bodyText: {
    fontSize: helpers.getSizeByHeight(12),
    color: 'rgb(131, 142, 155)'
  },
  horizontal: {
    flexDirection: "row"
  },
  marginTopMedium: {
    marginTop: helpers.getSizeByHeight(8)
  },
  footerColumn: {
    flex: 1,
    marginRight: helpers.getSizeByWidth(8),
  },
  horizontalDivider: {
    flex: 0,
    marginTop: helpers.getSizeByHeight(4),
    width: helpers.getSizeByWidth(1),
    height: helpers.getSizeByHeight(38),
    backgroundColor: 'rgb(223, 223, 223)',
  },
  footerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: helpers.getSizeByHeight(16),
    paddingBottom: helpers.getSizeByHeight(20),
    paddingLeft: helpers.getSizeByWidth(16),
    paddingRight: helpers.getSizeByWidth(16),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  footerValueText: {
    fontWeight: "bold",
    fontSize: helpers.getSizeByHeight(14),
    color: "rgb(90, 104, 121)",
    marginTop: helpers.getSizeByHeight(8)
  },
  footerTitleText: {
    fontSize: helpers.getSizeByHeight(12),
    color: 'rgb(131, 142, 155)'
  },
  mapView: {
    width: helpers.getSizeByWidth(343),
    height: helpers.getSizeByHeight(220),
    backgroundColor: "black"
  },
  itemCenterAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
