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
                <Text style={styles.name}>
                    {this.props.octocat.name}
                </Text>
                <Text style={styles.author} numberOfLines={1}>
                    by {this.props.octocat.author}
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
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#48BBEC'
    },
    author: {
        fontSize: 20,
        color: '#656565'
    }
});

module.exports = OctocatDetails;