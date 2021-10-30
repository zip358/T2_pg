document.body.addEventListener("mouseover",function(e){
    //console.log(e);
    document.getElementById("X").innerText = e.screenX;
    document.getElementById("Y").innerText = e.screenY;
    document.body.style.backgroundColor = "RGB(" +  Math.floor((e.screenY % 255 + e.screenX % 255) % 255) +"," +  Math.floor(e.screenX % 255) +"," +  Math.floor(e.screenY % 255) +")";
});