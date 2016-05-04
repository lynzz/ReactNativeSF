'use strict';

var React = require('react-native');

var QuestionsView = require('./Home/Questions')
var SearchView = require('./Home/Search')
var UserView = require('./Home/User')
var ArticlesView = require('./Home/Articles')
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  NavigatorIOS,
  Image
  } = React;

var Icon = require('react-native-vector-icons/Ionicons');

var IndexView = React.createClass({
  statics: {
    title: 'index',
    description: '问题'
  },

  getInitialState: function () {
    return {
      selectedBar: 'questions'
    };
  },

  componentWillMount: function() {
    // https://github.com/facebook/react-native/issues/1403 prevents this to work for initial load
    // Icon.getImageSource('ios-home-outline', 30).then((source) => this.setState({ homeIcon: source }));
  },

  _renderContent: function (title, component) {
    return (
      <NavigatorIOS
        style = {styles.container}
        initialRoute={{
          title: title,
          component: component
        }} />
    );
  },

  render: function () {
    return (
      <TabBarIOS selectedTab={this.state.selectedBar} tintColor='#009a61'>
        <Icon.TabBarItemIOS
          title = '问题'
          key = 'questions'
          name = 'questions'
          iconName="ios-help"
          selectedIconName="ios-help"
          selected = {this.state.selectedBar == 'questions'}
          onPress = {() => this.setState({selectedBar: 'questions'})}
        >
          {this._renderContent('问题', QuestionsView)}
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title = '文章'
          key = 'articles'
          name = 'articles'
          iconName="ios-paper-outline"
          selectedIconName="ios-paper"
          selected = {this.state.selectedBar == 'articles'}
          onPress = {() => this.setState({selectedBar: 'articles'})}
        >
          {this._renderContent('文章', ArticlesView)}
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title = '搜索'
          key = 'search'
          name = 'search'
          iconName="ios-search"
          selectedIconName="ios-search-strong"
          selected = {this.state.selectedBar == 'search'}
          onPress = {() => this.setState({selectedBar: 'search'})}
        >
          {this._renderContent('搜索', SearchView)}
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title = '我的'
          key = 'user'
          name = 'user'
          iconName="ios-person-outline"
          selectedIconName="ios-person"
          selected = {this.state.selectedBar == 'user'}
          onPress = {() => this.setState({selectedBar: 'user'})}
        >
          {this._renderContent('我的', UserView)}
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009a61'
  }
});

module.exports = IndexView;
