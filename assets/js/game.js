/* game variables */
let game = {
  gameorder: [],
  computerturn: [],
  playerturn: [],
  tally: 0,
  count: 0,
};

let incriments = 1;

/* Score and highscore */
let yourscore = 0;
let localStorageName = "KeyBeatsScore";

/* Start new game */
$("#start").click(function () {
    newGame();
});

function newGame() {
  $("#start").addClass("hide-button");
  game.gameorder = [];
  game.computerturn = [];
  game.playerturn = [];
  game.tally = 1;
  game.count = 0;
  sequence();
}

/* Randonmly generated sequence of five icon glows computerturn loop advice from code institue tutor "scott" */
function sequence() {
  setTimeout(function () {
    for (i = 0; i < incriments; i++) {
      game.gameorder.push(Math.floor(Math.random() * 5));
    }
    for (i = 0; i < game.gameorder.length; i++) {
      iconGlow(i);
    }
  }, 1000);

}
/* Delay between sequence using set timeout. Advice from mentor to look for loop delay so all lights dont flash together https://www.geeksforgeeks.org/how-to-add-a-delay-in-a-javascript-loop/ */
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
     icontime = setTimeout(function () {
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
    }, 600);
  });
}

$("#arrowups").click(function () {
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


/* function for comparing both arrays if player fails retry function will be called */
    function compareSequence() {
     /*    if (game.playerturn[game.count] != game.computerturn[game.count]) {
                  retry(); console.log("wrong") 
        }else{
               if (game.computerturn.length == game.playerturn.length) {
                $("#counter").html("ONWARD!");
                    onward();
                    updateScoreBoard();
                     playerTurn(); console.log("right") 
           game.count ++
      
               }
        }}  */


             if (game.playerturn[game.count] != game.computerturn[game.count]) {
            $("#counter").html("Wrong!");
                retry();
        } else {
            if (game.computerturn.length == game.playerturn.length) {
                $("#counter").html("Good!");
                    onward();
                game.count = 0;
            } else {
               
                playerTurn();
                game.count++;
            }
        }}
    
        
    
           
        function onward(){
        game.playerturn = [];
        game.computerturn = [];
        game.tally++;
        sequence();
        }

/* Add Retry button on failure, disables buttons to stop cheating*/
         function retry() {
        document.getElementById("audio");
        audio.pause();
        audio.currentTime = 0;
       $("#Modal").modal('show');
       $("#start").removeClass("hide-button");   
       HighScoreBoard()
       /* location.reload(); */
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


/* Scoreboard and highscore */
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

/* Local Storage Highscore got advice for code from STACKOVERFLOW https://stackoverflow.com/questions/26440147/use-local-storage-to-remember-the-high-score-javascript */
function HighScoreBoard() {
    if (localStorage.getItem(localStorageName) === null) {
        highScore = 0;
    }
    else {
        highScore = localStorage.getItem(localStorageName);
    }
    highScore = Math.max(yourscore, highScore);
    localStorage.setItem(localStorageName, highScore);
    let highScoreBox = document.getElementById("highScore");
    highScoreBox.textContent = highScore;
}