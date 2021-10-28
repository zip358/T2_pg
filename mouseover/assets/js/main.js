"use strict";
var img = document.getElementsByTagName("img");
for (const key in img) {
    if (Object.hasOwnProperty.call(img, key)) {
        const element = img[key];
        element.addEventListener("mouseover",function(){
            let obj = JSON.parse(this.getAttribute("data-id"));
            console.log(obj);
            let url = "https://picsum.photos/id/" + obj.in + "/300/400";
            this.src = url;
        });
        element.addEventListener("mouseout",function(){
            let obj = JSON.parse(this.getAttribute("data-id"));
            console.log(obj);
            let url = "https://picsum.photos/id/" + obj.out + "/300/400";
            this.src = url;
        });
    }
}