import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    // MapView
} from 'react-native';
import MapStyles from './MapStyles';
import MapView from 'react-native-maps';
// import screen2Styles from "../../Styles/screen2Styles";
export default class Map extends Component {
    constructor(props) {
        super(props);
        this.onRegionChange = this.onRegionChange.bind(this);
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        }
    }


    onRegionChange(region) {
        // this.setState({ region });
    }


    _headerView() {
        return (
            <View>
                <View style={MapStyles.todayView}>
                    <Text style={MapStyles.todayText}>
                        {"Today"}
                    </Text>
                    <View style={MapStyles.runsView}>
                        <Text style={MapStyles.runVal}>
                            {"10"}
                        </Text>
                        <Text style={MapStyles.runText}>{"runs"}</Text>
                    </View>
                </View>

                <View style={MapStyles.countryView}>
                    <Text style={MapStyles.countryText}>{"Schladming, Austria"}</Text>
                    <Text style={MapStyles.timeText}>{"2 hours 54 mins"}</Text>
                </View>
            </View>

        )
    }

    _footerView() {
        return (

            <View style={MapStyles.footerView}>
                <View style={MapStyles.distanceView}>
                    <View style={MapStyles.distanceTextView}>
                        <Text style={MapStyles.footerTitleText}>{"Distance"}</Text>
                    </View>
                    <View style={MapStyles.distanceValueView}>
                        <Text style={MapStyles.footerValueText}>{"53.8 km"}</Text>
                    </View>
                </View>

                <View style={MapStyles.descentView}>
                    <View style={MapStyles.descentTextView}>
                        <Text style={MapStyles.footerTitleText}>{"Descent"}</Text>
                    </View>
                    <View style={MapStyles.descentValueView}>
                        <Text style={MapStyles.footerValueText}>{"3086.8 km"}</Text>
                    </View>
                </View>

                <View style={MapStyles.speedView}>
                    <View style={MapStyles.speedTextView}>
                        <Text style={MapStyles.footerTitleText}>{"Max speed"}</Text>
                    </View>
                    <View style={MapStyles.speedValueView}>
                        <Text style={MapStyles.footerValueText}>{"99.9 km/h"}</Text>
                    </View>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={MapStyles.mapCardContainer}>
                {this._headerView()}

                <View style={MapStyles.mapView}>

                </View>

                {this._footerView()}

            </View>
        )
    }
}