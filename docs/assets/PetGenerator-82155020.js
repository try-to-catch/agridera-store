import{d as l,k as c,c as o,a as e,o as s,_ as r}from"./index-2c6976a3.js";const i={id:"doge-generator"},u={class:"results"},h={class:"result"},p=["src"],g={key:1},m={class:"result"},v=["src"],f={key:1},k=l({__name:"PetGenerator",setup(y){const n=c(""),_=()=>{fetch("https://random.dog/woof.json").then(t=>t.json()).then(t=>{n.value=t.url})},a=c(""),d=()=>{fetch("https://api.thecatapi.com/v1/images/search").then(t=>t.json()).then(t=>{a.value=t[0].url})};return(t,C)=>(s(),o("div",i,[e("div",u,[e("div",h,[a.value.length?(s(),o("img",{key:0,src:a.value,alt:"cat"},null,8,p)):(s(),o("p",g,"Random Cat"))]),e("div",m,[n.value.length?(s(),o("img",{key:0,src:n.value,alt:"doge"},null,8,v)):(s(),o("p",f,"Random Dog"))])]),e("div",{class:"buttons"},[e("button",{onClick:d},"Get Cat"),e("button",{onClick:_},"Get Dog")])]))}});const b=r(k,[["__scopeId","data-v-f30b1185"]]);export{b as default};
