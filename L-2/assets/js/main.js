"use strict";
var name = "";
var txt = "";

document.getElementById("input1").addEventListener("input",function(){
    name = this.value;
});
document.getElementById("textarea1").addEventListener("input",function(){
    document.getElementById("cnt").innerText = this.value.length;
    txt = this.value;
});

document.getElementById("btn1").addEventListener("click",function(){
    document.getElementById("name_print").innerText = name;
    document.getElementById("txt_print").innerText = txt;
});