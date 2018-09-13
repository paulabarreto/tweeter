$(document).ready(function() {
  //Counting characters
  var chars = 140;
  $ (".counter").html(140);
  $(".text").keyup(function() {
    let value = $(this).val();
    chars = 140 - value.length;
    let counter = $(this).siblings(".counter");
    counter.html(chars);
    if(chars < 0){
      $(this).siblings(".counter").css("color", "red");
    }
  });
  //$timeStamp
  var date = date();
  $(".")
});
