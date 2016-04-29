/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
} from 'react-native';

const IndexView = require('./App/Views/Index')

var ReactNativeSF = React.createClass({
  render: function() {
    return (
      <IndexView/>
    );
  }
});
AppRegistry.registerComponent('ReactNativeSF', () => ReactNativeSF);
