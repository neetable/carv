import {
    Platform,
    StyleSheet,
    Dimensions
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const deviceHeight = Dimensions.get("window").height - getStatusBarHeight();
const deviceWidth = Dimensions.get("window").width;

const designHeight = 667;
const designWidth = 375;

const helpers = {
    getSizeByHeight: function (size) {
        return (size / designHeight) * deviceHeight;
    },
    getSizeByWidth: function (size) {
        return (size / designWidth) * deviceWidth;
    }
}

export default helpers;