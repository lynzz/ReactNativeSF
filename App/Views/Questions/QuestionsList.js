'use strict';

const React = require('react-native');
const RefreshableListView = require('react-native-refreshable-listview')
const RefreshInfiniteListView = require('@remobile/react-native-refresh-infinite-listview');

const QuestionsListRowView = require('./QuestionsListRow');

const {
  ListView,
  Text,
  View
  } = React;

const QuestionsListView = React.createClass({
  render: function () {
    return this._renderQuestionsList();
  },
  _renderQuestionsList: function () {
    return (
      <RefreshInfiniteListView
        ref={(list) => {this.list = list}}
        dataSource={this.props.data}
        renderRow={this._renderQuestionsListRow}
        loadedAllData={this.loadedAllData}
        onRefresh={this.onRefresh}
        onInfinite={this.onInfinite}
        >
      </RefreshInfiniteListView>
    );
  },
  loadedAllData () {
    let page = this.props.page
    let maxPage = Math.ceil(page.total/page.size)
    return page.current >= maxPage;
  },
  onInfinite () {
    this.list.hideFooter()
    this.props.loadData(this.props.page.current + 1)
  },

  onRefresh () {
    this.list.hideHeader()
    this.props.loadData()
  },
  _renderQuestionsListRow: function (data) {
    return (
      <QuestionsListRowView
        selectQuestion={this.props.selectQuestion}
        item={data}/>
    )
  }
});

const indicatorStylesheet = React.StyleSheet.create({
  wrapper: {
    backgroundColor: 'red',
    height: 60,
    marginTop: 10,
  },
  content: {
    backgroundColor: 'blue',
    marginTop: 10,
    height: 60,
  },
})

const styles = React.StyleSheet.create({
  refreshDescription: {
    color: '#f00'
  }
});

export default QuestionsListView;
