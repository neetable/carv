import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity
} from 'react-native';
import MapStyles from './MapStyles';
import Map from './Map';
// import screen2Styles from "../../Styles/screen2Styles";
export default class MapComponent extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
    }
    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow = {this._renderItem}
            />
            
        )
    }

    _renderItem(rowData){
        return(
            <View style = {MapStyles.mapContainer}>
                <Map/>
            </View>
            
        )   
    }
}