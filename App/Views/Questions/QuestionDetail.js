'use strict';

var React = require('react-native');

var ParseHTML = require('../../Common/ParseHTML')
var ParseRule = require('../../Common/ParseRule')
import Questions from '../../Proxy/Questions'

var {
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicatorIOS,
  TouchableHighlight
  } = React;

var QuestionDetailView = React.createClass({
  getInitialState () {
    return {
      loaded: false,
      answersData: {},
      questionData: {}
    }
  },
  render: function () {
    if (this.state.loaded) {
      let data = this.state.questionData;
      console.log(data);
      let Tags = data.tags.map((tag) => {
        return (
          <Text style={[styles.inlineShow, styles.qTag]} key={tag.id}>{tag.name}</Text>
        )
      })
      return (
        <ScrollView style={styles.scrollView}>
          <View style={styles.qContainer}>
            <View style={styles.qHeader}>
              <Text style={styles.qTitle}>{data.title}</Text>
            </View>
            <View style={styles.flexRow}>
              {Tags}
            </View>
            
            <View style={styles.qBody}>
              <ParseHTML
                code={data.parsedText}
                customTagToStyle={ParseRule}
              />
            </View>
            <View style={[styles.flexRow, styles.userInfo]}>
              <Text style={[styles.inlineShow, styles.userName]}>{data.user.name}</Text>
              <Text style={styles.grayText}>{data.createdDate}提问</Text>
            </View>
            <View style={styles.vote}>
              <Text>{data.votes} 票</Text>
            </View>
          </View>
          <View style={styles.answerCont}>
            <View style={styles.answerHeader}>
              <Text style={styles.grayText}>{data.answers} 回答</Text>
            </View>
            <View style={styles.answerBody}>
              {this._renderAnswers()}
            </View>
          </View>
        </ScrollView>
      );
    } else {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicatorIOS color="#009a61" style={{marginVertical: 30, marginBottom: 30}} />
        </View>
      );
    }
    
  },
  _renderAnswers () {
    let data = this.state.answersData.available

    if (+this.state.questionData.answers === 0) {
      return (
        <Text style={[styles.grayText, styles.empty]}>暂时没有人回答</Text>
      )
    }
    return data.map((item) => {
      return (
        <View key={item.id}>
          <View style={[styles.flexRow]}>
            <Image style={[styles.inlineShow, styles.avatar]} source={{uri: item.user.avatarUrl}}/>
            <Text style={[styles.inlineShow, styles.userName]}>{item.user.name}</Text>
            <Text style={styles.inlineShow}>{item.createdDate}</Text>
          </View>
          <View>
            <ParseHTML
              code={item.parsedText}
              customTagToStyle={ParseRule}
            />
          </View>
          <View style={styles.vote}>
            <Text>{item.votes} 票</Text>
          </View>
        </View>
      )
    })
  },
  componentDidMount: function () {
    this._fetchData();
  },

  _fetchData () {
    Promise.all([
      Questions.getQuestionDetail(this.props.questionId),
      Questions.getAnswers(this.props.questionId)
    ]).then(([questionData, answersData]) => {
      this.setState({
        questionData: questionData,
        answersData: answersData,
        loaded: true
      })
    })
  }
});

var styles = React.StyleSheet.create({
  scrollView: {
    height: 300
  },
  avatar: {
    width: 32,
    height: 32,
    marginRight: 10,
    borderRadius: 16
  },
  empty: {
    alignSelf: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  loadingContainer: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  qContainer: {
    padding: 10
  },
  qHeader: {
    paddingTop: 80
  },
  flexRow: {
    flexDirection: 'row'
  },
  qTag: {
    color: '#017e66',
    fontSize: 10,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 6,
    paddingLeft: 6,
    marginRight: 5,
    marginTop: 10,
    borderRadius: 3,
    backgroundColor: '#ECF5F3'
  },
  inlineShow: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  qBody: {
    paddingTop: 10,
  },
  qTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  userInfo: {
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#E2E2E2'
  },

  userName: {
    color: '#017e66',
    marginRight: 10
  },

  vote: {
    paddingBottom: 8,
    paddingTop: 8
  },

  answerCont: {
  },

  answerHeader: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderColor: '#E2E2E2'
  },

  answerBody: {
    padding: 10
  },

  grayText: {
    color: '#ccc'
  }
});

export default QuestionDetailView;
