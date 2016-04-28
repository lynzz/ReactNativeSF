'use strict';

var React = require('react-native');
var AppData = require('../../AppData');
var News = require('../../Proxy/News');
var NewsListView = require('../News/NewsList');

var {
  Text,
  View,
  ListView,
  ActivityIndicatorIOS
  } = React;


var NewsView = React.createClass({
  getInitialState: function () {
    return {
      loaded: false,
      channelId: 2,
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    }
  },
  _renderGroupTitle: function () {
    var that = this;
    return (
      <View style={styles.itemTitle}>
      {AppData.Channels.items.map(item => {
        return (
          <Text
            onPress = {() => {
              this.setState({loaded: false});
              this._fetchData(item.id);
            }}
            key={item.id}
            style={[styles.itemTitleText, function () {
              if (item.id == that.state.channelId) {
                return {color: '#0d5302'}
              }
            }()]}>
            {item.channelName}
          </Text>
        )
      })}
      </View>
    )
  },
  render: function () {
    if (this.state.loaded) {
      return (
        <View style={styles.container}>
        {this._renderGroupTitle()}
          <NewsListView
            data={this.state.dataSource}
            channelId={this.state.channelId}
            style={styles.groupList} />
        </View>
      );
    } else {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicatorIOS color="#356DD0" style={{marginVertical: 30, marginBottom: 30}} />
        </View>
      );
    }
  },
  componentDidMount: function () {
    this._fetchData(this.state.channelId);
  },
  _fetchData: function (channelId) {
    var that = this;
    News.getNews(channelId, function (data) {
      //console.log(data[0]);
      that.setState({
        dataSource: that.state.dataSource.cloneWithRows(data),
        channelId: channelId,
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

module.exports = NewsView;
