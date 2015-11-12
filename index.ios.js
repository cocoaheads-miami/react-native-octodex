'use strict';

var React = require('react-native');
var Octocats = require('./Octocats');

var {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
    } = React;

class Octodex extends React.Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.nav}
                initialRoute={{
                    title: 'Octodex',
                    component: Octocats
                }}
            />
        );
    }
}

var styles = StyleSheet.create({
    nav: {
        flex: 1
    }
});

AppRegistry.registerComponent('Octodex', () => Octodex);
