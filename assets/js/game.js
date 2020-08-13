/* game variables */

let gameorder = ["arrowup", "quaver", "arrowrgt", "arrowleft", "arrowdown"];
let computerturn = [];
let playerturn = [];
let score = 0;
let highscore;


/* Random sequence for icon selection  */
function sequence(gameorder){  
return gameorder[Math.floor(Math.random()*gameorder.length)];
}

/* Start new game */
    $("#start").click(function () {
        newGame();
    });

function newGame(){
     $("#start").addClass("hide-button");
}