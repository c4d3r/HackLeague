browser.contextMenus.create({
    id: "searchGoogleCM",
    title: "Search in Google",
    contexts: ['selection']
});


browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "searchGoogleCM") {
        var word = info.selectionText;
        browser.tabs.create({ url: "https://www.google.com/search?q="+word+"&oq="+word+"&aqs=chrome..69i57j69i60l3.1129j0j8&sourceid=chrome&ie=UTF-8", selected: true })
    }
});