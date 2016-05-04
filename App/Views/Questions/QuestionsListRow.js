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
    
    return (
      <TouchableHighlight
        underlayColor={'#ccc'}
        onPress={() => {this.props.selectQuestion(data.id, data.title)}}>
        <View style={styles.rowView}>
          <View style={styles.rowMain}>
            <Text style={styles.rowTextTitle}>{data.title}</Text>
            <View style={styles.cellAnswersWrap}>
              <Text style={styles.ceilAnswers}>{data.answers}</Text>
            </View>
          </View>
          <View style={styles.rowSub}>
            <Text style={styles.cellName}>{data.user.name}</Text>
            <Text style={styles.cellDate}>{data.createdDate}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
});

var styles = React.StyleSheet.create({
  rowView: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2'
  },
  rowMain: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  rowSub: {
    flexDirection: 'row',
    paddingTop: 10,
    alignItems: 'flex-start'
  },
  rowTextTitle: {
    fontSize: 16,
    paddingRight: 10,
    flex: 1
  },
  cellName: {
    flex: 1,
    fontSize: 10,
    color: '#666'
  },
  cellDate: {
    fontSize: 10,
    color: '#666'
  },
  cellAnswersWrap: {
    borderWidth: 1,
    borderColor: '#009a61',
    borderRadius: 3,
    paddingTop: 2,
    paddingBottom: 2,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009a61'
  },
  ceilAnswers: {
    color: '#fff'
  }
});

module.exports = QuestionsListRowView;
