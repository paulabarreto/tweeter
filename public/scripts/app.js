
//Looping through the tweets and sending them to createTweetElement function
function renderTweets(tweets) {
  for(let i = 0; i < tweets.length; i++){
    let $tweet = createTweetElement(tweets[i]);
    $('#tweets-container').prepend($tweet);
  }
}

//Create Elements to contain the tweets
function createTweetElement(tweet){

   let $tweet = $("<article>").addClass("tweets rounded-border");
   let $header = $("<header>").addClass("tweet-header");
   let $avatar = $(`<img src=${tweet.user.avatars.small}></img>`).addClass("tweet-header__avatar");
   let $title = $(`<div>${tweet.user.name}</div>`).addClass("tweet-header__title");
   let $handle = $(`<div>${tweet.user.handle}</div>`).addClass("tweet-header__handle");

   $($header).append($avatar);
   $($header).append($title);
   $($header).append($handle);
   $($tweet).append($header);

   function escape(str) {
     var div = document.createElement('div');
     div.appendChild(document.createTextNode(str));
     return div.innerHTML;
   }

   let $body = $(`<div>${escape(tweet.content.text)}</div>`).addClass("tweet-body");
   $($tweet).append($body);

   let $footer = $("<footer>").addClass("tweet-footer");
   let $timeStamp = $("<div>5 days ago</div>").addClass("tweet-footer__timestamp");
   let $socialIcons = $("<div>").addClass("tweet-footer__social-icons");
   let $flag = $("<i>").addClass("fab fa-font-awesome-flag");
   let $retweet = $("<i>").addClass("fas fa-retweet");
   let $heart = $("<i>").addClass("fas fa-heart");

   $($footer).append($timeStamp);
   $($socialIcons).append($flag);
   $($socialIcons).append($retweet);
   $($socialIcons).append($heart);
   $($footer).append($socialIcons);
   $($tweet).append($footer);

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
