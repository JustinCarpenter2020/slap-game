var health2 = 100
var health1 = 120
// var nickname = "target"

// var hits = 0

// characters
var players = {
  ken: {
    health: 120,
    kick: 20,
    punch: 15,
    uppercut: 30,
    hadouken: 40
  },
  ryu: {
    health: 100,
    kick: 15,
    punch: 10,
    uppercut: 25,
    hadouken: 60
  }
}


function player1() {

}

function drawplayer() {
  let player = ""
  let playerNames = Object.keys(players)
  playerNames.forEach(player => {
    player += ``
  });

}

function player1Health() {
  gameOver1()
  document.getElementById("health1").innerText = health1.toString()
}


function player2Health() {
  gameOver()
  document.getElementById("health2").innerText = health2.toString()
}





// function update() {
//   document.getElementById("health1").innerText = health2.toString()
//   document.getElementById("hits").innerText = hits.toString()
//   gameOver()
// }

function gameOver() {
  if (health2 == 0) {
    document.getElementById("player2").style.visibility = "hidden";
    document.getElementById("game-over").innerText = "Game Over"
    document.getElementById("Buttons").style.visibility = "hidden";
  }
  
}

function gameOver1() {
  if (health1 == 0) {
    document.getElementById("player1").style.visibility = "hidden";
    document.getElementById("game-over").innerText = "Game Over"
    document.getElementById("Buttons").style.visibility = "hidden";
}
}
function slap() {
  health2--
  player2Health()
  // update()
}

function kick() {
  health2 -= 10
  player2Health()
  // update()
}

function punch() {
  health2 -= 5
  player2Health()
  // update()
}


function hit() {
  health1--
  player1Health()
  // update()
}

function uppercut() {
  health1 -= 5
  player1Health()
}

function hadouken() {
  health1 -= 10
  player1Health()
}