'use strict';

export default class util{

  constructor() {

  }

  async waitForJSReady(driverObj) {
    return driverObj.wait(function() {
        return driverObj.executeScript(function() {
          console.log(document.readyState);
          return (document.readyState === 'complete')
        });
      }
      , 10000, 'JavaScript didn\'t load');
  }

  async doneSuccess(callback) {
    return function () {
      callback();
    };
  }

  async doneError(callback) {
    return function (err) {
      callback(err);
    };
  };
  
  async checkError(err, callback) {
    if (err) {
      callback(err);
      return function () { /* noop */};
    }
    return callback;
  }

  async waitForUrlToChangeTo(driverObj, url) {
      let currentUrl;
      driverObj.getCurrentUrl().then(function(url) {
              currentUrl = url;
          }
      ).then(function() {
          driverObj.wait(function() {
                  return driverObj.getCurrentUrl().then(function (url) {
                      return url !== currentUrl;
                  });
              });
          }
      ).then(function () {
          return true;
      });
  }

}