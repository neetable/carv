import React, { Component } from 'react';
import {
    FlatList,
} from 'react-native';

import Map from './ActivityItemComponent';
import sampleData from '../../../sampleData'

export default class BodyComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <FlatList
                vertical
                data={sampleData}
                showsVerticalScrollIndicator={false}
                keyExtractor={this._keyExtractor}
                renderItem={this.renderItem} />
        )
    }

    _keyExtractor = (item, index) => item.id;

    renderItem({ item, index }) {
        return <Map data={item} />;
    }
}