/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Fake data taken from tweets.json
const data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function renderTweets(tweets) {
  for(let i = 0; i < tweets.length; i++){
    let $tweet = createTweetElement(tweets[i]);
    $('#tweets-container').append($tweet);
  }
}

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

$(document).ready(function(){
  renderTweets(data);
});
