
//Looping through the tweets and sending them to createTweetElement function
function renderTweets(tweets) {
  for(let i = 0; i < tweets.length; i++){
    let $tweet = createTweetElement(tweets[i]);
    $('#tweets-container').prepend($tweet);
  }
}


//Function that makes tweet message safe from xss
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

//create elements to contain the tweets
function createTweetElement(tweet){

  //Finding tweet date to place in timestamp
  var d = new Date(tweet.created_at);
  d = d.toDateString();

  let $tweet = `
    <article class="tweets rounded-border">
      <header class="tweet-header">
        <img class="tweet-header__avatar" src=${tweet.user.avatars.small}></img>
        <div class="tweet-header__title">${tweet.user.name}</div>
        <div class="tweet-header__handle">${tweet.user.handle}</div>
      </header>
      <body>
        <div class="tweet-body">${escape(tweet.content.text)}</div>
      </body>
      <footer class="tweet-footer">
        <div class="tweet-footer__timestamp">${d}</div>
        <div class="tweet-footer__social-icons">
          <i class="fab fa-font-awesome-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
      </footer>
    </article>
  `

   return $tweet;
 }

//Ajax Request to get tweets
$(document).ready(function(){
  function loadTweets(){
    $.ajax("/tweets", { method: 'GET' })
    .then(function (tweets){
      console.log(tweets);
      renderTweets(tweets);
    });
  }
  loadTweets();

  //Toggle create tweet Element
  $( ".btn-compose" ).click(function() {
    $( ".new-tweet" ).toggle();
    $( ".text" ).focus();
 });

});
