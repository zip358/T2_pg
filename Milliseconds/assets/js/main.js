
setInterval(() => {
    var t = new Date();
    document.getElementById("view").innerText = t.getMilliseconds();
}, 1);
document.getElementById("view").addEventListener("click",function(){
    window.location.href = "../index.html";
});