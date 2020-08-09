
let command = ['uarrow','rarrow','larrow','darrow','space'];
let score = 0;
let localStorageName = "keybScore";


/* choose a random command from the command array */
function chooseRandomCommand(a) {
    return commands[Math.floor(Math.random() * commands.length)];
}

/* Start Game */
  $("#start").click(function () {
        newGame();
    });
