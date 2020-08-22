/* game variables */
let game = {
  gameorder: [],
  computerturn: [],
  playerturn: [],
  count: 0

};
/* Score */
let yourscore = 0;

/* Start new game */
$("#start").click(function () {
    newGame();
});

function newGame() {
  $("#start").addClass("hide-button");
  game.gameorder = [];
  game.computerturn = [];
  game.playerturn = [];
 /*  game.score = 9999; */
  sequence();
}

/* Randonmly generated sequence for computertun */
function sequence() {
  setTimeout(function () {
    for (i = 0; i <9999; i++) {
      game.gameorder.push(Math.floor(Math.random() * 5));
    }
    for (i = 0; i < game.gameorder.length; i++) {
      iconGlow(i);
    }
  }, 1000);

}
/* Delay between sequence using set timeout. Advice from mentor to look for loop delay so all lights dont flash together*/

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

    if (game.gameorder.length == game.computerturn.length ) {
      setTimeout(function () {
        playerturn();  
      }, 800);
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
/* Click Arrow UP Logo */
$("#arrowups").click(function () {
  game.playerturn.push(0);
  logoOnea();
  compareSequence();
});
/* Arrow Key Up */
document.getElementById("#arrowups")
document.addEventListener('keydown',playerturn => {
if (playerturn.isComposing || playerturn.keyCode === 38) {
     game.playerturn.push(0);
  logoOnea();
  compareSequence();
}});

/* Click Music note logo */
$("#notes").click(function () {
  game.playerturn.push(1);
  logoTwoa();
    compareSequence(); 
});

/* Space Bar for music notes */
document.getElementById("#notes")
document.addEventListener('keydown',playerturn => {
if (playerturn.isComposing || playerturn.keyCode === 32) {
     game.playerturn.push(1);
  logoTwoa();
  compareSequence();
}});

/* Click Arrow Right Logo */
$("#arrowr").click(function () {
  game.playerturn.push(2);
  logoThreea();
    compareSequence(); 
});
/* Arrow Right Key */
document.getElementById("#arrowr")
document.addEventListener('keydown',playerturn => {
if (playerturn.isComposing || playerturn.keyCode === 39) {
     game.playerturn.push(2);
  logoThreea();
  compareSequence();
}});

/* Click Arrow Left Logo */
$("#arrowl").click(function () {
  game.playerturn.push(3);
  logoFoura();
    compareSequence();
});

/* Arrow Left Key */
document.getElementById("#arrowr")
document.addEventListener('keydown',playerturn => {
if (playerturn.isComposing || playerturn.keyCode === 37) {
     game.playerturn.push(3);
  logoFoura();
  compareSequence();
}});

/* Arrow Down Logo Click */
$("#arrowd").click(function () {
  game.playerturn.push(4);
  logoFivea();
  compareSequence();
});

/* Arrow Down Key */
document.getElementById("#arrowd")
document.addEventListener('keydown',playerturn => {
if (playerturn.isComposing || playerturn.keyCode === 40) {
     game.playerturn.push(4);
  logoFivea();
  compareSequence();
}});



/* function for comparing both arrays if player fails retry function will be called */
    function compareSequence() {
        if (game.playerturn.length -1 == game.computerturn.length -1) {
                updateScoreBoard();  console.log("right")
        }else{
            if 
                (retry()); console.log("wrong")
            }
        }
         

/* Add Retry button on failure, disables buttons to stop cheating*/
         function retry() {
        document.getElementById("audio");
        audio.pause();
        audio.currentTime = 0;
       $("#Modal").modal('show');
       $("#start").removeClass("hide-button");   
        location.reload(); 
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


/* Scoreboard */
function updateScoreBoard() {
    yourscore++;
    let scoreBox = document.getElementById("score");
    scoreBox.textContent = yourscore;
    
}

function resetScore() {
    let yourscore = 0;
    let scoreBox = document.getElementById("score");
    scoreBox.textContent = score;
}
