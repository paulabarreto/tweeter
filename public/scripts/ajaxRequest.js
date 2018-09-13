$(document).ready(function(){
  //Validation messages are hidden
  $(".max").hide();
  $(".empty").hide();
  $("#new-tweet").on("submit", function (event){
    //Toggle compose section
    $(".max").slideUp();
    $(".empty").slideUp();
    event.preventDefault();
    //serializes tweets
    let str = $(this).serialize();
    //Display validation messages
    if(str.length > 140){
      $(".max").slideDown();
    } else if(str === "text="){
      $(".empty").slideDown();
    } else{
      //Posts tweets to server through ajax request
      $.post("/tweets", str, function(){
        location.reload();
      });
    }
  });
});
