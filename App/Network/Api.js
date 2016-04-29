'use strict';

const API_URL = 'http://api.segmentfault.com'
export default {
  getNewestQuestion () {
    return `${API_URL}/question/newest`
  },

  getNewestQuestionByPage (page) {
    return `${API_URL}/question/newest?page=${page}`
  },

  getQuestionDetail (id) {
    return `${API_URL}/question/${id}`
  },

  getAnswers (id) {
    return `${API_URL}/answer/show/${id}`
  },

  getNewestArticle () {
    return `${API_URL}/article/newest`
  },

  getArticleDetail (id) {
    return `${API_URL}/article/${id}`
  }
}
