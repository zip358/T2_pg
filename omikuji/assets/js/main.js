document.getElementById("btn").addEventListener("click",function(){
    let n = getRandomInt(11);
    let img = "omikuji-daikichi.png";
    if(n >= 0){
        img = "omikuji-daikyo.png";
    }
    if(n >= 2){
        img = "omikuji-kyo.png";
    }
    if(n >= 3){
        img = "omikuji-shokichi.png";
    }
    if(n >= 4){
        img = "omikuji-shokichi.png";
    }
    if(n >= 5){
        img = "omikuji-chukichi.png";
    }   
    if(n >= 7){
        img = "omikuji-kichi.png";
    }           
    if(n >= 8){
        img = "omikuji-daikichi.png";
    }        
    this.src = "./images/" + img;
});
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  