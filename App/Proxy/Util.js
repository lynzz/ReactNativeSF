'use strict';

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

const parseData = (res) => {
  return res.json()
}

const processData = (json) => {
  return json.status === 0 ? Promise.resolve(json.data) : Promise.reject(json.message);
}

export function fetchData (api) {
  return fetch(api)
    .then(checkStatus)
    .then(parseData)
    .then(processData)
    .then(data => {
      return data
    }).catch(error => {
      return Promise.reject(error)
    })
}
