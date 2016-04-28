'use strict';

var React = require('react-native');

var {
  Text,
  View,
  Image,
  TouchableHighlight
  } = React;

var ListRowView = React.createClass({
  render: function () {
    var data = this.props.item;
    var cxt = this;
    return (
      <TouchableHighlight
        underlayColor={'#ccc'}>
        <View
          style={styles.rowView}>
          <Image
            style={styles.rowImage}
            source={{uri: data.imgPath}}/>
          <View style={styles.rowText}>
            <Text style={styles.rowTextGroupName}>{data.title}</Text>
            <Text style={styles.rowTextGroupInfo}>{data.description.substr(0, 20) + '...'}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
});

var styles = React.StyleSheet.create({
  rowImage: {
    width: 50,
    height: 50
  },
  rowView: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2'
  },
  rowText: {
    flex: 1,
    marginLeft: 10,
    alignSelf: 'center'
  },
  rowTextGroupName: {
    fontWeight: 'bold',
    justifyContent: 'center',
    marginBottom: 10
  },
  rowTextGroupInfo: {
    color: '#666'
  }
});

module.exports = ListRowView;
