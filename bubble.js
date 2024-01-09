if(true){
    alert("You want to Start the geme");
}
else{
    // document.querySelector("body").style.display ="none";
}
// function for Bubble makeing
function Bubble_maker() {
  var bubble = "";
  for (var i = 1; i < 120; i++) {
    var number = Math.floor(Math.random() * 10);
    bubble += `<div class="bubble">${number}</div>`;
  }

  document.querySelector(".pbut").innerHTML = bubble;   
}
// function for timer
var time = 60;
function timer(){
    var clear_time = setInterval( function () {
        if(time>0){
            time--;
            document.querySelector("#run_time").textContent = time;
        }
        else{
            alert("Game is End");
            clearInterval(clear_time)
            handleClick();
        }
    },1000)
}
var hiten;
function hit(){
    hiten = Math.floor(Math.random()*10);
    document.querySelector("#hit_btn").textContent = hiten;
}
document.querySelector(".pbut").addEventListener("click",function(detile){
   var num = Number(detile.target.textContent)
   if(num == hiten){
    scroe();
    Bubble_maker();
    hit()
   }
   else{

   }
})
var scroe_value = 0;
function scroe(){
    scroe_value += 10;
    console.log();
    document.querySelector("#Score").textContent = scroe_value;
    return scroe_value;
}
// to relode page 
function handleClick() {
    window.location.reload();
}

// function Calling 
hit()
timer();
Bubble_maker();