import {
  Platform,
  StyleSheet,
} from 'react-native';

export default MapStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //   backgroundColor: 'rgb(43,153, 225)',
  },
  todayView: {
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "space-between"
  },

  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  mapCardContainer: {
    backgroundColor: "white",
    width: 343,
    height: 370,
    borderRadius: 20,
    marginBottom: 15,
    paddingTop: 5,
    shadowOffset: { width: 1, height: 1, },
    shadowColor: 'black',
    shadowOpacity: 0.3,

  },
  todayText: {
    fontSize: 18,
    paddingTop: 20,
    paddingLeft: 0,
    fontWeight: 'bold'
  },
  runVal: {
    fontSize: 18,
    // paddingTop: 20,
    marginRight: 5,
    fontWeight: 'bold'
  },
  runsView: {
    flexDirection: "row",
    paddingTop: 20,
    justifyContent: "space-around",
  },
  runText: {
    // paddingRight: 10,
    // paddingTop: 11,
    color: "rgb(131, 142, 155)"
  },

  countryView: {
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 16,
    justifyContent: "space-between"
  },

  countryText: {
    // paddingLeft: 10,
    fontSize: 13,
    paddingTop: 8,
    color: "rgb(131, 142, 155)"

  },
  timeText: {
    fontSize: 13,
    color: "rgb(131, 142, 155)"
  },
  distanceView: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    // paddingRight: 50
  },

  descentView: {
    borderLeftWidth: 1,
    borderLeftColor: 'rgb(223, 223, 223)',
  },

  descentTextView: {
    marginLeft: 5
  },
  distanceTextView: {

  },

  descentValueView: {
    marginLeft: 5
  },

  speedView: {
    borderLeftWidth: 1,
    borderLeftColor: 'rgb(223, 223, 223)',
    paddingRight: 50,
    marginLeft: 5
  },

  speedTextView: {
    marginLeft: 5,
  },
  speedValueView: {
    marginLeft: 5
  },

  footerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
    
  },


  footerValueText: {
    fontWeight: "bold",
    color: "rgb(90, 104, 121)"
  },

  footerTitleText: {
    color: "rgb(131, 142, 155)",
    fontSize: 12,
  },
  mapView: {
    width: 343,
    height: 220,
    backgroundColor: "black"
    
  },

  map: {
    height: 400,
    marginTop: 80
 }
});
