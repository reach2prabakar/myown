'use strict';

import util from '../util/index';
import allureReporter from '../util/allureReporter';

let nemo, view, utilObj, allureObj;

describe('@sampleTest@', _ => {

    before(async function () {
        nemo = this.nemo;
        view = this.nemo.view;
        utilObj = new util();
        allureObj = new allureReporter();
    });

    it('@Sample Page@', async function () {
        allureObj.feature('Sample Page Loaded');
		await nemo.driver.get(nemo.data.baseUrl);
		await utilObj.waitForJSReady(nemo.driver);
        nemo.driver.sleep(1000);
    });
	
});