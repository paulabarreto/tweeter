$(document).ready(function(){
  $(".max").hide();
  $(".empty").hide();
  $("#new-tweet").on("submit", function (event){
    $(".max").slideUp();
    $(".empty").slideUp();
    event.preventDefault();
    let str = $(this).serialize();
    if(str.length > 140){
      $(".max").slideDown();
    } else if(str === "text="){
      $(".empty").slideDown();
    } else{
      $.post("/tweets", str, function(){
        location.reload();
      });
    }
  });
});
