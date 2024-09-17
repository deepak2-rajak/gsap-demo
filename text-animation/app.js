function breaktext(){
var h1=document.querySelector("h1");
let h1text=h1.textContent;
var splittext=h1text.split("");
var cluteer="";
splittext.forEach(function(elem){
cluteer+=`<span>${elem}</span>`;

})
h1.innerHTML=cluteer;
}
breaktext();
gsap.from("h1 span",{
    y:50,
    opacity:0,
    duration:0.8,
    delay:0.3,
    stagger:0.15,
    // stagger:-0.15,
})