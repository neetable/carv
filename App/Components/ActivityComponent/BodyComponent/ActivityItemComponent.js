import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';

import style from './BodyStyles';

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
            <View style={style.headerView}>
                {/* First Row */}
                <View style={[style.headerTitleView, style.horizontal]}>
                    <Text style={style.headerTitle}>
                        {this.props.data.date}
                    </Text>
                    <View style={[style.horizontal, style.itemCenterAlign]}>
                        <Text style={style.headerTitle}>
                            {this.props.data.runs}
                        </Text>
                        <Text style={[style.bodyText]}>{"runs"}</Text>
                    </View>
                </View>
                {/* Second Row */}
                <View style={[style.headerTitleView, style.horizontal, style.marginTopMedium]}>
                    <Text style={style.bodyText}>{this.props.data.location}</Text>
                    <Text style={style.bodyText}>{this.props.data.duration}</Text>
                </View>
            </View >
        )
    }

    _footerView() {
        return (
            <View style={style.footerView}>
                <View style={style.footerColumn}>
                    <Text style={style.footerTitleText}>{"Distance"}</Text>
                    <Text style={style.footerValueText}>{this.props.data.distance}</Text>
                </View>

                <View style={[style.footerColumn, style.horizontalDivider, style.itemCenterAlign]} />

                <View style={style.footerColumn}>
                    <Text style={style.footerTitleText}>{"Descent"}</Text>
                    <Text style={style.footerValueText}>{this.props.data.descent}</Text>
                </View>

                <View style={[style.footerColumn, style.horizontalDivider]} />

                <View style={style.footerColumn}>
                    <Text style={style.footerTitleText}>{"Max speed"}</Text>
                    <Text style={style.footerValueText}>{this.props.data.maxSpeed}</Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={style.mapCardContainer}>
                {this._headerView()}

                <View style={style.mapView}>

                </View>

                {this._footerView()}

            </View>
        )
    }
}