'use strict';

var Util = require('./Util');
import Api from '../Network/Api';

var getNewestQuestion = function(successFunc, errorFunc){
  fetch(Api.getNewestQuestion())
    .then(function(response){
      return response.json();
    })
    .then(function(responseObj){
      successFunc && successFunc(responseObj.data.rows);
    })
    .catch((error) => {
      errorFunc && errorFunc(error);
    })
    .done();
}

var getQuestionDetail = function(id, successFunc, errorFunc){
  fetch(Api.getQuestionDetail(id))
    .then(function(response){
      return response.json();
    })
    .then(function(responseObj){
      successFunc && successFunc(responseObj.data.listData);
    })
    .catch((error) => {
      errorFunc && errorFunc(error);
    })
    .done();
}

module.exports = {
  getNewestQuestion: getNewestQuestion,
  getQuestionDetail: getQuestionDetail
};
