document.body.addEventListener("mouseover",function(e){
    //console.log(e);
    let X = e.X;
    let Y = e.Y;
    document.getElementById("X").innerText = X;
    document.getElementById("Y").innerText = Y;
    document.body.style.backgroundColor = "RGB(" +  Math.floor((Y % 255 + X % 255) % 255) +"," +  Math.floor(X % 255) +"," +  Math.floor(Y % 255) +")";
});