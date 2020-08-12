/* Game Variables */
var thegame = {
    playorder: [],
    comporder: [],
    runorder: [],
    count: 0
};


/* Start Game */
  $("#start").click(function () {
        newGame();
    });

//Resets all the values, calls for function compgo//
    function newGame() {
     game.comporder = [];
     game.playorder = [];
     game.runorder = [];
     game.count = 0;
        compgo();
    }









   /* Icon functions */
    function firstbutton() {
        var audio = document.getElementById("arrowu");
        audio.play();
        $(".arrowup").addClass("effect-logo");
        setTimeout(function () {
            $(".arrowup").css("color", "");
            $(".fas").removeClass("effect-logo");
        }, 600);
    }

