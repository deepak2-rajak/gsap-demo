function breaktext(){
    var h1=document.querySelector("h1");
    var h1text=h1.textContent;
    var splittext=h1text.split("");
    var halfvalue=splittext.length/2;

    
    var cluteer="";
    splittext.forEach(function(elem,idx){
        if(idx<halfvalue){
            cluteer+=`<span class="a">${elem} </span>`;
        }else{
            cluteer+=`<span class="b">${elem} </span>`;
        }
        

    })
    h1.innerHTML=cluteer;
}
breaktext();
gsap.from("h1 .a",{
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:0.15,

})
gsap.from("h1 .b",{
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:-0.15,
    opacity:0,
})