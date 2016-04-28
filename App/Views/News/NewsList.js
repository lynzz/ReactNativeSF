'use strict';

var React = require('react-native');
var NewsListRowView = require('./NewsListRow');

var {
  ListView
  } = React;

var NewsListView = React.createClass({
  render: function () {
    return this._renderNewsList();
  },
  _renderNewsList: function () {
    return (
      <ListView
        automaticallyAdjustContentInsets={false}
        showsVerticalScrollIndicator={false}
        style={this.props.style}
        dataSource={this.props.data}
        renderRow={this._renderNewsListRow}
      />
    );
  },
  _renderNewsListRow: function (data) {
    return (
      <NewsListRowView
        item={data}/>
    )
  }
});

module.exports = NewsListView;
