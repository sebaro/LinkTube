javascript:
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:"http://sebaro.pro",activate: true,position:"afterCurrrent"});