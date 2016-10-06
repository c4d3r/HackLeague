browser.browserAction.onClicked.addListener(function(tab) {
  var text = "I had a wonderful experience! The rooms were wonderful and the staff were helpful. ";
  var domain = "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment";

  fetch(domain, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': '79514059e53f4a0d96a021e6ddc13d0a'
    },
    body: JSON.stringify({
      "documents": [
        {
          "id": "string",
          "text": text,
          "language": "en"
        }
      ]
    })
  })
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    alert(text);
  });
});
