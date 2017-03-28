var convert = function(str)
{
  str = str.replace(/&#8217;/g, "%27");
  str = str.replace(/&#038;/g, "%26");
  str = str.replace(/&#8220;/g, "%22");
  str = str.replace(/&#8221;/g, "%22");
  str = str.replace(/&#8230;/g, "...");
  str = str.replace(/&#8211;/g, "–");
  str = str.replace(/&#46;/g, ".");
  return str;
};

$(document).ready(function() {
  $( "#quote" ).click(function() {
  $.ajax({
      url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?",
      dataType: 'jsonp',
      success: function(response) {
          var quotetxt = response[0].content.slice(3, -5);
          var convertedQuote = convert(quotetxt);
          var author = response[0].title;
    var randomQuote = response[0].content + response[0].title;
    $("#message").html("<p>" + randomQuote + "</p>");
    $("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + convertedQuote + " --" + author + "");
      }  
  });
  });
});