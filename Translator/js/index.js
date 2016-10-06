function onPageShow(){

	browser.tabs.query({ currentWindow: true, active: true }, function(tabs){
        var url = tabs[0].url;
        var title = tabs[0].title;
        browser.tabs.create({ url: "http://www.microsofttranslator.com/bv.aspx?from=&to=en&a=" + url, selected: true })     
    });

};
// Event binding.
document.addEventListener("pageshow", onPageShow()); 