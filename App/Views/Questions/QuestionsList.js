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

const MyRefreshingIndicator = React.createClass({
  render() {
    return (
      <View>
        <Text style={styles.refreshDescription}>下拉释放刷新1</Text>
      </View>
    )
  }
})

const MyRefreshingIndicator1 = React.createClass({
  render() {
    return (
      <RefreshableListView.RefreshingIndicator stylesheet={indicatorStylesheet} />
    )
  }
})

const QuestionsListView = React.createClass({
  render: function () {
    return this._renderQuestionsList();
  },
  _renderQuestionsList: function () {
    return (
      /*<RefreshableListView
        style={this.props.style}
        dataSource={this.props.data}
        loadData={this.props.loadData}
        renderRow={this._renderQuestionsListRow}
        description="下拉释放刷新"
        refreshDescription="下拉释放刷新"
        refreshingIndicatorComponent={MyRefreshingIndicator}
      />*/
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
