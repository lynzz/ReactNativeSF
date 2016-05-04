'use strict'

var React = require('react-native')

var HtmlRender = require('react-native-html-render')

import { link } from './Util'

var SF_URL = 'https://segmentfault.com'

var {
  Component,
  View,
  Text,
  StyleSheet,
  Image,
  LinkingIOS,
  Dimensions,
  Navigator
} = React

var { height, width } = Dimensions.get('window')

class HtmlContent extends Component {
  constructor (props) {
    super(props)
  }

  _onLinkPress (url) {
    console.log(url)
  }

  _renderNode (node, index, parent, type) {
    var name = node.name
    if (node.type == 'block' && type == 'block') {
      if (name == 'img') {
        var uri = SF_URL + node.attribs.src
        
        return ( 
          <View 
            key = {index}
            style = {styles.imgWrapper}>
            <Image 
              source = {{uri: uri}}
              style = {styles.img}>
            </Image> 
          </View>
        )
      }
    }
  }

  render () {
    return ( 
      <HtmlRender
        value = {this.props.content}
        stylesheet = {this.props.style}
        onLinkPress = {this._onLinkPress.bind(this)}
        renderNode = {this._renderNode}/>
    )
  }

}

var styles = React.StyleSheet.create({
  imgWrapper: {
    
  },
  img: {
    width: width - 30,
    height: width / 2,
    resizeMode: Image.resizeMode.contain
  }
})

module.exports = HtmlContent
