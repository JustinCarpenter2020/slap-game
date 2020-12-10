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
    
   