"use strict";
cls();

function cls(){   
   var object = document.querySelectorAll("[id^=errors_]");
   for (const key in object) {
       if (Object.hasOwnProperty.call(object, key)) {
           const element = object[key];
           console.log(element);
           element.innerHTML = "";
       }
   }
}

let all_flg = [];
let sel1 = {flg:false,val:document.getElementById("my-select").value,errorid:"errors_sel1",msg:"error!!",ptn:"[1|2|3]"};
let txt = {flg:false,val:document.getElementsByName("txt")[0].value.replace(/[ |　]/g,""),errorid:"errors_txt",msg:"error!!",ptn:""};
let name = {flg:false,val:document.getElementsByName("name")[0].value.replace(/[ |　]/g,""),errorid:"errors_name",msg:"error!!",ptn:""};
let furigana = {flg:false,val:document.getElementsByName("furigana")[0].value.replace(/[ |　]/g,""),errorid:"errors_furigana",msg:"error!!",ptn:""};
let email = {flg:false,val:document.getElementsByName("email")[0].value.replace(/[ |　]/g,""),errorid:"errors_email",msg:"error!!",ptn:"^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$"};
let tel = {flg:false,val:document.getElementsByName("tel")[0].value.replace(/[ |　|━.*‐.*―.*－.*\-.*ー.*\-]/g,""),msg:"error!!",errorid:"errors_tel",ptn:"^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$"};
let jp_ads = {flg:false,val:document.getElementsByName("jp-ads")[0].value.replace(/[ |　]/g,""),errorid:"",msg:"",ptn:"[0-9]{1,2}"};
let ken = {flg:false,val:document.getElementById("ken").value,errorid:"",msg:"",ptn:""};
let ads = {flg:false,val:document.getElementsByName("ads")[0].value,errorid:"",msg:"",ptn:""};

document.getElementById("my-select").addEventListener("change",function(){
    sel1.val = this.value.replace(/[ |　]/g,"");
    chk();
});
document.getElementsByName("txt")[0].addEventListener("input",function(){
    txt.val = this.value.replace(/[ |　]/g,"");
    chk();
});
document.getElementsByName("name")[0].addEventListener("input",function(){
    name.val = this.value.replace(/[ |　]/g,"");
    chk();
});
document.getElementsByName("furigana")[0].addEventListener("input",function(){
    furigana.val = this.value.replace(/[ |　]/g,"");
    chk();
});
document.getElementsByName("email")[0].addEventListener("input",function(){
    email.val = this.value.replace(/[ |　]/g,"");
    chk();
});
document.getElementsByName("tel")[0].addEventListener("input",function(){
    tel.val = this.value.replace(/[ |　|━.*‐.*―.*－.*\-.*ー.*\-]/g,"");
    chk();
});
document.getElementsByName("jp-ads")[0].addEventListener("input",function(){
    jp_ads.val = this.value.value.replace(/[ |　]/g,"");
    chk();
});
document.getElementsByName("ads")[0].addEventListener("input",function(){
    ads.val = this.value.value.replace(/[ |　]/g,"");
    chk();
});
document.getElementById("ken").addEventListener("change",function(){
    ken.val = this.value;
    chk();
});

document.getElementById("btn").addEventListener("click",function(){
    chk(true);
});

function chk(send_flg){
    cls();

    let all_flg_chk = function(f){
        let flg = true;
        for (const key in f) {
             if(!f[key].flg){
                flg = false;
             }
        }
        return {flg:flg};
    };
    let txt_chk = function({flg,val,errorid,msg,ptn}){
        flg = (val!=="" && val.length>0)?true:false;
        return {flg:flg,val:val,errorid:errorid,msg:msg,ptn:ptn};
    };
    let ptn_chk = function({flg,val,errorid,msg,ptn}){
        let Rg = new RegExp(ptn);
        flg = Rg.test(val)?true:false;
        return {flg:flg,val:val,errorid:errorid,msg:msg,ptn:ptn};
    };


    all_flg[0] =  ptn_chk(sel1);
    all_flg[1] =  txt_chk(txt);
    all_flg[2] =  txt_chk(name);
    all_flg[3] =  txt_chk(furigana);
    all_flg[4] =  ptn_chk(email);
    all_flg[5] =  ptn_chk(tel);

    if(all_flg_chk(all_flg).flg){
        if(send_flg){
            alert("ok");
            // $.ajax({
            //     type: "method",
            //     url: "url",
            //     data: "data",
            //     dataType: "dataType",
            //     success: function (response) {
                    
            //     }
            // });
        }
         return true;
    }else{
        for(const key in all_flg){
            if(!all_flg[key].flg){
                document.getElementById(all_flg[key].errorid).innerText = all_flg[key].msg;
            }
            
        }
    }   
    return true;
}