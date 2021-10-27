"use strict";
var i = Number(document.getElementById("view").innerText);
document.getElementById("btn").addEventListener("click",function(){
   i++;
   if(i===7 || i===10){
       alert(i);
   } 
   document.getElementById("view").innerText = i;
});