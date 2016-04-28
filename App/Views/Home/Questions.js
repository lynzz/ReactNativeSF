'use strict';

var React = require('react-native');
var Questions = require('../../Proxy/Questions');
var QuestionsListView = require('../Questions/QuestionsList');

var {
  Text,
  View,
  ListView,
  ActivityIndicatorIOS
  } = React;


var QuestionsView = React.createClass({
  getInitialState: function () {
    return {
      loaded: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    }
  },
  
  render: function () {
    if (this.state.loaded) {
      return (
        <View style={styles.container}>
          <QuestionsListView
            data={this.state.dataSource}
            style={styles.groupList} />
        </View>
      );
    } else {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicatorIOS color="#009a61" style={{marginVertical: 30, marginBottom: 30}} />
        </View>
      );
    }
  },
  componentDidMount: function () {
    this._fetchData();
  },
  _fetchData: function () {
    var that = this;
    Questions.getNewestQuestion(function (data) {
      //console.log(data[0]);
      that.setState({
        dataSource: that.state.dataSource.cloneWithRows(data),
        loaded: true
      });
    }, function (err) {
      console.log(err);
    });
  }
});

var styles = React.StyleSheet.create({
  loadingContainer: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: '#ffffff',
    flex: 1
  },
  itemTitle: {
    marginTop: 70,
    flexDirection: 'row'
  },
  itemTitleText: {
    flex: 1,
    color: '#2a2',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },
  groupList: {
    marginTop: 10
  }
});

module.exports = QuestionsView;
