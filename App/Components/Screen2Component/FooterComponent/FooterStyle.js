import {
    Platform,
    StyleSheet,
    Dimensions
} from 'react-native';

var windowsize = Dimensions.get('window');
export default FooterStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        //   backgroundColor: 'rgb(43,153, 225)',
    },
    imageView: {
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center"
    },
    image: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    unselectedTabText: {
        color: "rgb(161, 174, 182)",
        fontSize: 10,
        textAlign: "center"
    },
    selectedTabText: {
        color: "rgb(32, 139, 209)",
        fontSize: 10,
        textAlign: "center"
    }
})