"use strict";
var img = document.getElementsByTagName("img");
for (const key in img) {
    if (Object.hasOwnProperty.call(img, key)) {
        const element = img[key];
        element.addEventListener("mouseover",function(){
            this.src = "https://picsum.photos/id/110/300/400";
        });
    }
}