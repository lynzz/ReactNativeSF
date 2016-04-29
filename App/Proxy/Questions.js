'use strict';

const Util = require('./Util');

import Api from '../Network/Api';

const fetchData = (api, successFunc, errorFunc) => {
  fetch(api)
    .then(function(response){
      return response.json();
    })
    .then(function(responseObj){
      successFunc && successFunc(responseObj.data);
    })
    .catch((error) => {
      errorFunc && errorFunc(error);
    })
    .done();
}

var getNewestQuestion = function(successFunc, errorFunc){
  fetchData(Api.getNewestQuestion(), successFunc, errorFunc)
}

var getNewestQuestionByPage = function(page, successFunc, errorFunc){
  fetchData(Api.getNewestQuestionByPage(page), successFunc, errorFunc)
}

var getQuestionDetail = function(id, successFunc, errorFunc){
  fetchData(Api.getQuestionDetail(id), successFunc, errorFunc)
}

export default {
  getNewestQuestion: (successFunc, errorFunc) => fetchData(Api.getNewestQuestion(), successFunc, errorFunc),
  getNewestQuestionByPage: (page, successFunc, errorFunc) => fetchData(Api.getNewestQuestionByPage(page), successFunc, errorFunc),
  getQuestionDetail: (id, successFunc, errorFunc) => fetchData(Api.getQuestionDetail(id), successFunc, errorFunc)
};
