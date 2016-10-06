if (typeof msBrowser !== 'undefined') {
    chrome = msBrowser;
}
else if (typeof browser != 'undefined') {
    chrome = browser;
}


function log(windowInfo) {
	console.log(windowInfo);
}
windows.getCurrent({populate:true}, log);