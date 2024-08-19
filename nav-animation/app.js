var main=document.querySelector("#main i");
var full=document.querySelector("#full i");
var nav=document.querySelector("#nav h1");
nav.innerText="Code with Deepak";
var tl=gsap.timeline();
tl.to("#full",{
    right:0,
    duration:0.6,
})
tl.from("#full h4",{
    opacity:0,
    duration:0.6,
    x:150,
stagger:0.3,
scrub:2,
    
})
tl.from("#full i",{
    opacity:0,
    
})
tl.pause();
main.addEventListener("click",function(){
    tl.play();
})
full.addEventListener("click",function(){
    tl.reverse();
})

    gsap.from("#nav h1",{
        y:-40,
        duration:1,
        opacity:0,
    })
