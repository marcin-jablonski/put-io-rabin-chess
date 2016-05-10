import xhr from 'xhr'
import {resolve as urlResolve} from 'url'

import {apiUrl} from '../config/appConfig'

function _parseResponseBody(contentType, body) {
  if(contentType.indexOf('application/json') !== -1 && typeof body === 'string') {
    return JSON.parse(body);
  }

  return body;
}

function _createRequest(method, url, json, requestOptions = {}) {
  return new Promise((resolve, reject) => {
    const {
      headers = {}
    } = requestOptions;

    headers.Accept = '*/*' //Firefox requirement
    
    let requestObject = {
      method,
      headers,
      url: urlResolve(apiUrl, url)
    }

    if(json) {
      requestObject.json = json;
    }

    xhr(requestObject, (error, response, responseBody) => {
      if(error) {
        reject(error);
        return;
      }

      const parsedResponseBody = _parseResponseBody(response.headers['content-type'], responseBody);

      if(response.statusCode >= 300) {
        reject({
          status: response.statusCode,
          data: parsedResponseBody,
        });
      }

      else {
        resolve(parsedResponseBody);
      }
    });
  });
}

export function httpGet(url, json, options) {
  return _createRequest('GET', url, json, options);
}

export function httpPost(url, json, options) {
  return _createRequest('POST', url, json, options);
}

export function httpPut(url, json, options) {
  return _createRequest('PUT', url, json, options);
}

export function httpDelete(url, json, options) {
  return _createRequest('DELETE', url, json, options);
}
