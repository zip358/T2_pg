document.body.addEventListener("mouseover",function(e){//mousemove
    console.log(e);
    let X = e.screenX;
    let Y = e.screenY;
    document.getElementById("X").innerText = "X = " + X;
    document.getElementById("Y").innerText = "Y = " + Y;
    document.body.style.backgroundColor = "RGB(" +  Math.floor((Y % 255 + X % 255) % 255) +"," +  Math.floor(X % 255) +"," +  Math.floor(Y % 255) +")";
});