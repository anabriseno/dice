var player1 = function () {
  return Math.floor(Math.random() * 6) + 1;

}

var player2 = function () {
  return Math.floor(Math.random() * 6) + 1;

}

function player1 (roll1, total1) {
  this.roll1 = roll1
  this.total1 = total
}

function player2 (roll2, total2) {
  this.roll2 = roll2
  this.total2 = total2
}


$ (document).ready(function() {

  $("button#start").click(function(event){
      $(".player-console").hide();
      clearValues();
      player1name.newGame();
      player2name.newGame();
      $("#round-total-1").empty();
      $("#total-score-1").empty();
      $("#die-roll-1").empty();
      $("#round-total-2").empty();
      $("#total-score-2").empty();
      $("#die-roll-2").empty();

      $(".start-menu").show();
    });


});
