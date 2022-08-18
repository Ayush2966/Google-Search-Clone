$(document).ready(function() {
    var gsearch = function() {
      var url = 'https://www.google.com/search?q=' + document.getElementById('searchme').value;
      window.open(url, 'google');
    };
    var glucky = function() {
      var url = 'https://www.google.com/search?q=' + document.getElementById('searchme').value + '&btnI';
      window.open(url, 'google');
    };
  
    $(".left").click(gsearch);
    $(".right").click(glucky);
  
    $("#searchme").keypress(function(e) {
      if (e.which == 13) {
        gsearch();
      }
    });
  });