'use strict';

const React = require('react-native');
import Questions from '../../Proxy/Questions';
import QuestionsListView from '../Questions/QuestionsList';
import QuestionDetailView from '../Questions/QuestionDetail';

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
      dataRows: [],
      page: {},
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
            loadData={this._fetchData}
            page={this.state.page}
            selectQuestion={this.selectQuestion}
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
  selectQuestion: function (id, title) {
    this.props.navigator.push({
      title: title,
      component: QuestionDetailView,
      passProps: {questionId: id, navigator: this.props.navigator}
    });
  },
  componentDidMount: function () {
    this._fetchData();
  },
  _fetchData: function (page = 1) {
    var that = this;
    if (page === 1) {
      this.setState({dataRows: []});
    }
    Questions.getNewestQuestionByPage(page)
      .then((data) => {
        console.log('_fetchData');
        let rows = that.state.dataRows.concat(data.rows)
        that.setState({
          dataSource: that.state.dataSource.cloneWithRows(rows),
          dataRows: rows,
          page: data.page,
          loaded: true
        });
      }, (err) => {
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
