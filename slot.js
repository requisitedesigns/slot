var playerCoins = 1000;
var playerBet = prompt("Place a bet between 1-1000:");

/* Check for valid bet */
if (playerBet == null || undefined || 0) {
    playerBet = prompt("Please place a valid bet between 1-1000:");
  }

/* Symbol Objects */
var cherry = {
    name: "cherry", value: 10
}
var ten = {
    name: "10", value: 25
}
var jack = {
    name: "J", value: 40
}
var queen = {
    name: "Q", value: 50
}
var king = {
    name: "K", value: 75
}
var ace = {
    name: "A", value: 100
}

var bonusSymbol = {
    name: "Bonus", value: 0
}

/* Array of Symbols for random selection */
var symbols = [cherry, ten, jack, queen, king, ace, bonusSymbol];

function spinSlot () {
    /* Variables*/
    var result = [[],[],[]];
    var checkBonus = 0; 
                
    /* Push symbols to array for a 3x3 grid of symbols at random*/
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            result[i].push(symbols[Math.floor(Math.random() * 7)].name);
        }
    }

    /* return the array of symbols to the user */
    playerCoins -= playerBet;
    return result;
}

/* Produce a round */
var gameRound = spinSlot();

/* Show Symbols to Terminal */
console.log(gameRound[0].join(" "));
console.log(gameRound[1].join(" "));
console.log(gameRound[2].join(" "));

// console.log(gameRound.join("\n"));

/* Determine if the symbols match diagnolly, vertically, etc. */
var winRound = false;
var winningSymbol;


/* Paylines */
/* Diag starting from top left to bottom right*/
if ((gameRound[0][0] == gameRound[1][1]) && (gameRound[1][1] == gameRound[2][2]) ) {
    winRound = true; winningSymbol = gameRound[0][0]; console.log("The winning symbol was " + gameRound[0][0])
  } 
/* Top Row Across */
  else if ((gameRound[0][0] == gameRound[0][1]) && (gameRound[0][1] == gameRound[0][2]) ) {
        winRound = true; winningSymbol = gameRound[0][2]; console.log("The winning symbol was " + gameRound[0][2])
  } 
/* Middle Row Across */
  else if ((gameRound[1][0] == gameRound[1][1]) && (gameRound[1][1] == gameRound[1][2]) ) {
        winRound = true; winningSymbol = gameRound[1][2]; console.log("The winning symbol was " + gameRound[1][2])
  } 
/* Bottom Row Across */
  else if ((gameRound[2][0] == gameRound[2][1]) && (gameRound[2][1] == gameRound[2][2]) ) {
        winRound = true; winningSymbol = gameRound[2][2]; console.log("The winning symbol was " + gameRound[2][2])
  } 
/* Diag starting from top right to bottom left */
  else if ((gameRound[2][0] == gameRound[1][1]) && (gameRound[1][1] == gameRound[0][2]) ) {
        winRound = true; winningSymbol = gameRound[2][0]; console.log("The winning symbol was " + gameRound[2][0])
  }
/* Bonus Checker */
  else if ((gameRound[0][0] || gameRound[1][0] || gameRound[2][0] == "Bonus") && 
           (gameRound[0][1] || gameRound[1][1] || gameRound[2][1] == "Bonus") && 
           (gameRound[0][2] || gameRound[1][2] || gameRound[2][2] == "Bonus") ) {
            winRound = true; winningSymbol = "Bonus"; console.log("Bonus Round Started! Congrats!")            
} else {
    console.log("This spin did not result in a win. Please try again!");
  }

    /* Payouts */
    switch (winningSymbol) {
        case "cherry":
            playerCoins = playerCoins + cherry.value;
            console.log(playerCoins);
            break;
        case "10":
            playerCoins = playerCoins + ten.value;
            console.log(playerCoins);
            break;
        case "J":
            playerCoins = playerCoins + jack.value;
            console.log(playerCoins);
            break;
        case "Q":
            playerCoins = playerCoins + queen.value;
            console.log(playerCoins);
            break;
        case "K":
            playerCoins = playerCoins + king.value;
            console.log(playerCoins);
            break;
        case "A":
            playerCoins = playerCoins + ace.value;
            console.log(playerCoins);
            break;
        case "Bonus":
            prompt("Pick a number:\n1\n2\n3");
            var bonusWin = (parseInt(playerBet) * Math.floor(Math.random() * 4));
            playerCoins = playerCoins + bonusWin;
            console.log("You won " + bonusWin + " in the bonus!");
            console.log(playerCoins);
            break;
        default:
            break;    
    }
