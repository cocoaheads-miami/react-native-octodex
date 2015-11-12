'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    Image,
    } = React;

class OctocatDetails extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.octocat.url}}
                       style={styles.image} />
                <Text style={styles.welcome}>
                    {this.props.octocat.name}
                </Text>
                <Text style={styles.welcome}>
                    {this.props.octocat.author}
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    image: {
        width: 400,
        height: 400
    },
    spinner: {
        width: 64,
        height: 64
    },
    thumbNail: {
        width: 100,
        height: 100
    },
    listView: {
        paddingTop: 80,
        backgroundColor: '#F5FCFF'
    },
    thumb: {
        width: 80,
        height: 80,
        marginRight: 10
    },
    textContainer: {
        flex: 1
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    price: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#48BBEC'
    },
    title: {
        fontSize: 20,
        color: '#656565'
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10
    }
});

module.exports = OctocatDetails;