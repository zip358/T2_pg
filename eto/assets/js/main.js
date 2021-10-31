var eto = [
    {no:4,eto:"子",yomi:"ね"},
    {no:5,eto:"丑",yomi:"うし"},
    {no:6,eto:"寅",yomi:"とら"},
    {no:7,eto:"卯",yomi:"う"},
    {no:8,eto:"辰",yomi:"たつ"},
    {no:9,eto:"巳",yomi:"み"},
    {no:10,eto:"午",yomi:"うま"},
    {no:11,eto:"未",yomi:"ひつじ"},
    {no:0,eto:"申",yomi:"さる"},
    {no:1,eto:"酉",yomi:"とり"},
    {no:2,eto:"戌",yomi:"いぬ"},
    {no:3,eto:"亥",yomi:"い"}
];

document.getElementById("eto").innerText = (function(){
    let d = new Date();
    str = "";
    for (const key in eto) {
        console.log(eto[key].no,(d.getFullYear() % 12));
        if(eto[key].no ===(d.getFullYear() % 12)){
           str = eto[key].eto + `[${eto[key].yomi}]`;
        }
    }
    return str;
}());