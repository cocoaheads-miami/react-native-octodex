'use strict';

var React = require('react-native');
var OctocatDetails = require('./OctocatDetails');

var {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableHighlight
    } = React;

//const URL = 'http://localhost:8080/octodex.json';
const URL = 'https://raw.githubusercontent.com/cocoaheads-miami/octodex-api/master/api/octodex.json';

class Octocats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded: false
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData),
                    loaded: true
                });
            })
            .done();
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                style={styles.listView}
            />
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: 'https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif'}}
                    style={styles.spinner}
                />
            </View>
        );
    }

    rowSelected(octocat) {
        this.props.navigator.push({
            title: 'Octocat',
            component: OctocatDetails,
            passProps: {
                octocat: octocat
            }
        });
    }

    renderRow(octocat) {
        return (
            <TouchableHighlight
                onPress={() => this.rowSelected(octocat)}
                underlayColor="#dddddd">
                <View>
                    <View style={styles.rowContainer}>
                        <Image style={styles.thumb} source={{uri: octocat.url}} />
                        <View style={styles.textContainer}>
                            <Text style={styles.name}>
                                {octocat.name}
                            </Text>
                            <Text style={styles.author} numberOfLines={1}>
                                by {octocat.author}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
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
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#48BBEC'
    },
    author: {
        fontSize: 20,
        color: '#656565'
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10
    }
});

module.exports = Octocats;