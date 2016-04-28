'use strict';

var React = require('react-native');
var ListRowView = require('./ListRow');

var {
  ListView
  } = React;

var ListView = React.createClass({
  render: function () {
    return this._renderList();
  },
  _renderList: function () {
    return (
      <ListView
        automaticallyAdjustContentInsets={false}
        showsVerticalScrollIndicator={false}
        style={this.props.style}
        dataSource={this.props.data}
        renderRow={this._renderListRow}
      />
    );
  },
  _renderListRow: function (data) {
    return (
      <ListRowView
        item={data}/>
    )
  }
});

module.exports = ListView;
