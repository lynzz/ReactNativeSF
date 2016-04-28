'use strict';

var React = require('react-native');
var QuestionsListRowView = require('./QuestionsListRow');

var {
  ListView
  } = React;

var QuestionsListView = React.createClass({
  render: function () {
    return this._renderQuestionsList();
  },
  _renderQuestionsList: function () {
    return (
      <ListView
        automaticallyAdjustContentInsets={false}
        showsVerticalScrollIndicator={false}
        style={this.props.style}
        dataSource={this.props.data}
        renderRow={this._renderQuestionsListRow}
      />
    );
  },
  _renderQuestionsListRow: function (data) {
    return (
      <QuestionsListRowView
        item={data}/>
    )
  }
});

module.exports = QuestionsListView;
