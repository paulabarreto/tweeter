$(document).ready(function(){
  $("#new-tweet").on("submit", function (event){
    event.preventDefault();
    let str = $(this).serialize();
    $.post("/tweets", str, function(){
      if(str.length > 140){
        alert("Tweet exceeds maximum allowed");
      }
      if(str === "text="){
        alert("Please write something to tweet!");
      } else{
        location.reload();
      }
    });
  });
});
