// last tweet by http://www.stephane-richin.fr/tutoriaux_view/5.html
// $.getJSON("https://api.twitter.com/1/statuses/user_timeline/pascalpoizat.json?count=1&include_rts=1&callback=?", function(data) {
$.getJSON("https://api.twitter.com/1/statuses/user_timeline/pascalpoizat.json?count=1&include_rts=1&callback=?", function(data) {
    var tweet = data[0];
    var texte = tweet.text;
    var date = tweet.created_at;
     $("#tweet").html(texte+"<br><span class=\"muted\">"+date+"</span>");
});
