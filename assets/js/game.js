/* game variables */
var game =
 gameorder =[];
 computerturn = [];
 playerturn = [];
 score = 0;



/* Random sequence for icon selection  */


/* Start new game */
    $("#start").click(function () {
        newGame();
    });

function newGame(){
     $("#start").addClass("hide-button");
     game.gameorder = [];
     game.computerturn = [];
     game.playerturn = [];
     game.score = 0;
     sequence();
}


 function sequence() {
    
        setTimeout(function () {
            for (i = 0; i < game.score; i++) {
                game.gameorder.push(Math.floor(Math.random() * 5));
            }
            for (i = 0; i < game.gameorder.length; i++) {
                iconGlow(i);
            }
        }, 1000);
    } 

function iconGlow(i){
        setTimeout(function () {
            if (game.gameorder[i] == 0) {
                game.computerturn.push(i);
                iconOne();
            }
      if (game.computerturn.length == game.gameorder.length) {
                setTimeout(function () {
                    playerTurn();
                }, 200);
            }
        }, 1200 * i);
    }



      function iconOne() {
        var audio = document.getElementById("audioarrowu");
        audio.play();
        $(".arrowup").addClass("effect-logo");

        setTimeout(function () {
            $(".fas").removeClass("effect-logo");
        }, 600);
    }


   
