'use strict';

import { EventEmitter } from 'events'

import {fetchData} from './Util';

import Api from '../Network/Api';

const store = new EventEmitter()

store.getNewestQuestion = () => {
  return fetchData(Api.getNewestQuestion())
}

store.getNewestQuestionByPage = (page) => {
  return fetchData(Api.getNewestQuestionByPage(page))
}

store.getQuestionDetail = (id) => {
  return fetchData(Api.getQuestionDetail(id))
}

store.getAnswers = (id) => {
  return fetchData(Api.getAnswers(id))
}

export default store
