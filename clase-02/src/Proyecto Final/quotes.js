var baseUrl = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', function() {
  searchQuote();
}, false);


function searchQuote() {
  var quoteText = document.getElementById('quoteText');
  var authorText = document.getElementById('authorText');
  fetch(baseUrl + '/quotes', {
        method: 'GET'
    })
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      var quote = JSON.parse(data);
      quoteText.textContent = quote;
      authorText.textContent = quote;
    })
    .catch(function(err) {
      authorText.textContent = '-';
    });
}