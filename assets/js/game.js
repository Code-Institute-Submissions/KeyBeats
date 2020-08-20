/* game variables */
let game = {
  gameorder: [],
  computerturn: [],
  playerturn: [],
  score: 0,
  count: 0
};

/* Start new game */
$("#start").click(function () {
    newGame();
});

function newGame() {
  $("#start").addClass("hide-button");
  game.gameorder = [];
  game.computerturn = [];
  game.playerturn = [];
  game.score = 9999;
  game.count = 0
  $(".arrowup").disabled = false;
       $(".quaver").disabled = false;
       $(".arrowrgt").disabled = false;
       $(".arrowleft").disabled = false;
       $(".arrowdown").disabled = false;
  sequence();
}

/* Randonmly generated sequence for computertun */
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
/* Delay between sequence using settimeout. Advice from mentor to look for loop delay so all lights dont flash together https://www.geeksforgeeks.org/how-to-add-a-delay-in-a-javascript-loop/ */
function iconGlow(i) {
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

    if (game.gameorder.length == game.computerturn.length) {
      setTimeout(function () {
        playerturn();
      }, 200);
    }
  }, 1200* i);
}
/* Players Turn */
function playerturn() {
  $(".game-icon").on("click", function () {
    $(".game-icon").off();
    setTimeout(function () {
      $(".game-icon").css("cursor", "");
      compareSequence();
    }, 800);
  });
}

$("#arrowups").click(function () {
  game.playerturn.push(0);
  logoOnea();
});
$("#arrowups").keypress(function (e) {
  game.playerturn.push(0);
  logoOnea();
});

$("#notes").click(function () {
  game.playerturn.push(1);
  logoTwoa();
});
$("#arrowr").click(function () {
  game.playerturn.push(2);
  logoThreea();
});
$("#arrowl").click(function () {
  game.playerturn.push(3);
  logoFoura();
});
$("#arrowd").click(function () {
  game.playerturn.push(4);
  logoFivea();
});

/* function for if player fails */
    function compareSequence() {
        if (game.playerSequence[game.count] != game.computerSequence[game.count]) {
            $("#start").click(function () {
                retry();
            });
                game.count = 0;
            } else {
                playerTurn();
                game.count++;
            }
        }
    
/* Add Retry button on failure, disables buttons to stop cheating*/
         function retry() {
       $("#start").addClass("show-button");
       $(".arrowup").disabled = true;
       $(".quaver").disabled = true;
       $(".arrowrgt").disabled = true;
       $(".arrowleft").disabled = true;
       $(".arrowdown").disabled = true;
         }


/* Icon Flash and Audio*/
function logoOne() {
  $(".arrowup").addClass("effect-logo");
  setTimeout(function () {
    $(".fas").removeClass("effect-logo");
  }, 700);
}
function logoOnea() {
  var audio = document.getElementById("audioarrowu");
  audio.play();
  $(".arrowup").addClass("effect-logoclick");
  setTimeout(function () {
    $(".fas").removeClass("effect-logoclick");
  }, 700);
}

function logoTwo() {
  $(".quaver").addClass("effect-logo");
  setTimeout(function () {
    $(".fas").removeClass("effect-logo");
  }, 700);
}
function logoTwoa() {
  var audio = document.getElementById("musicnote");
  audio.play();
  $(".quaver").addClass("effect-logoclick");
  setTimeout(function () {
    $(".fas").removeClass("effect-logoclick");
  }, 700);
}
function logoThree() {
  $(".arrowrgt").addClass("effect-logo");
  setTimeout(function () {
    $(".fas").removeClass("effect-logo");
  }, 700);
}
function logoThreea() {
  var audio = document.getElementById("arrow-right");
  audio.play();
  $(".arrowrgt").addClass("effect-logoclick");
  setTimeout(function () {
    $(".fas").removeClass("effect-logoclick");
  }, 700);
}
function logoFour() {
  $(".arrowleft").addClass("effect-logo");
  setTimeout(function () {
    $(".fas").removeClass("effect-logo");
  }, 700);
}
function logoFoura() {
  var audio = document.getElementById("arrowlft");
  audio.play();
  $(".arrowleft").addClass("effect-logoclick");
  setTimeout(function () {
    $(".fas").removeClass("effect-logoclick");
  }, 700);
}
function logoFive() {
  $(".arrowdown").addClass("effect-logo");
  setTimeout(function () {
    $(".fas").removeClass("effect-logo");
  }, 700);
}
function logoFivea() {
  var audio = document.getElementById("arrowdwn");
  audio.play();
  $(".arrowdown").addClass("effect-logoclick");
  setTimeout(function () {
    $(".fas").removeClass("effect-logoclick");
  }, 700);
}
