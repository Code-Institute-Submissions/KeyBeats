/* game variables */
let game = {
 gameorder:[],
 computerturn:[],
 playerturn :[],
 score: 0
}

/* Start new game */
    $("#start").click(function () {
        newGame();
    });

function newGame(){
     $("#start").addClass("hide-button");
     game.gameorder = [];
     game.computerturn = [];
     game.playerturn = [];
     game.score = 99999;
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
                logoOne();
            }

            if (game.gameorder[i] == 1) {
                game.computerturn.push(i);
                logoTwo();
            }

             if (game.gameorder[i] == 2) {
                game.computerturn.push(i);
                logoThree();
            }

              if (game.gameorder[i] == 3) {
                game.computerturn.push(i);
                logoThree();
            }

              if (game.gameorder[i] == 4) {
                game.computerturn.push(i);
                logoFour();
            }

              if (game.gameorder[i] == 5) {
                game.computerturn.push(i);
                logoFive();
            }

      if (game.computerturn.length == game.gameorder.length) {
                setTimeout(function () {
                    playerTurn();
                }, 200);
            }
        }, 1200 * i);
    }



      function logoOne() {
        var audio = document.getElementById("audioarrowu");
        audio.play();
        $(".arrowup").addClass("effect-logo");

        setTimeout(function () {
            $(".fas").removeClass("effect-logo");
        }, 700);
    }

     function logoTwo() {
        var audio = document.getElementById("musicnote");
        audio.play();
        $(".quaver").addClass("effect-logo");
        setTimeout(function () {
            $(".fas").removeClass("effect-logo");
        }, 700);
    }

     function logoThree() {
        var audio = document.getElementById("arrow-right");
        audio.play();
        $(".arrowrgt").addClass("effect-logo");
        setTimeout(function () {
            $(".fas").removeClass("effect-logo");
        }, 700);
    }

    function logoFour() {
        var audio = document.getElementById("arrowlft");
        audio.play();
        $(".arrowleft").addClass("effect-logo");
        setTimeout(function () {
            $(".fas").removeClass("effect-logo");
        }, 700);
    }

    function logoFive() {
        var audio = document.getElementById("arrowdwn");
        audio.play();
        $(".arrowdown").addClass("effect-logo");
        setTimeout(function () {
            $(".fas").removeClass("effect-logo");
        }, 700);
    }
   
