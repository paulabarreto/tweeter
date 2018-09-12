$(document).ready(function(){
  $("#new-tweet").on("submit", function (event){
    event.preventDefault();
    let str = $(this).serialize();
    console.log(str);
  })
});
