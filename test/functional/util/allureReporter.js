var assert = require('assert')
require('mocha-allure-reporter');

export default class allureReporter{
    constructor(resolvedNemo) {
    }

    addStep(step){
        allure.createStep(step,function(){})();
    }

    addTCDescription(desp){
        allure.description(desp);
    }

    feature(featureDesp){
        allure.feature(featureDesp);
    }

}