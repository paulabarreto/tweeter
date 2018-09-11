/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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

   let $body = $(`<div>${tweet.content.text}</div>`).addClass("tweet-body");
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


 // Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$(document).ready(function(){
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});
