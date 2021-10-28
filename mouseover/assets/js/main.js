"use strict";
var img = document.getElementsByTagName("img");
for (const key in img) {
    if (Object.hasOwnProperty.call(img, key)) {
        const element = img[key];
        element.addEventListener("mouseover",function(){
            let url = "https://picsum.photos/id/" + this.getAttribute("data-id") + "/300/400";
            this.src = url;
        });
    }
}