'use strict';

var React = require('react-native');

var {
  Text,
  View,
  Image,
  TouchableHighlight
  } = React;

var QuestionsListRowView = React.createClass({
  render: function () {
    var data = this.props.item;
    var cxt = this;
    return (
      <TouchableHighlight
        underlayColor={'#ccc'}>
        <View
          style={styles.rowView}>
          <View style={styles.rowText}>
            <Text style={styles.rowTextGroupName}>{data.title}</Text>
            <Text style={styles.rowTextGroupInfo}>{data.user.name}</Text>
          </View>
          <View style={styles.rowText}>
            <Text style={styles.rowTextAnswers}>{data.answers}</Text>
            <Text style={styles.rowTextGroupInfo}>{data.createdDate}</Text>
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
  rowTextAnswers: {
    borderColor: '#009a61',
    color: '#009a61'
  },
  rowTextGroupInfo: {
    color: '#666'
  }
});

module.exports = QuestionsListRowView;
