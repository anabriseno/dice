$(document).ready(function() {

  $("form#player1").(function() {
   event.preventDefault();
   var player1  = parseInt ($("input#player1").val());
     return Math.floor(Math.random() * 6) + 1 ;
  });

  $("form#player2").(function() {
    event.preventDefault();
    var player2 = parseInt ($("input#player1").val());
      return Math.floor(Math.random()* 6) + 1 ;
  });

});
