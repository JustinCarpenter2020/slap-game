var health = 100

var nickname = "target"

var hits = 0


function slap(){
health--
alert(health)
hits ++
update()
}

function alert(health){
  
}


function update(){
 document.getElementById("health").innerText=health.toString()
 document.getElementById("hits").innerText=hits.toString()
 gameOver()
}

function gameOver(){
  if (health == 0) {
    
    document.getElementById("game-header").style.visibility = "hidden";
    document.getElementById("game-over").innerText="Game Over"
  }

}

function kick(){
  health -=10
  alert(health)
  hits ++
  update()
  }

  function punch(){
    health -= 5
    alert(health)
    hits ++
    update()
    }
    
   function draw(){

   }