'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image
  } = React;

var SearchView = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          搜索新闻
        </Text>
      </View>
    );
  }
});


var styles = React.StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  titleText: {
    color: '#009688',
    fontSize: 25,
    fontWeight: '900',
    marginTop: 50
  },
  titleImage: {
    width:100,
    height:100
  }
});

module.exports = SearchView;
