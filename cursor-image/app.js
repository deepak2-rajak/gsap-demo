var cursor=document.querySelector("#cursor");
var main=document.querySelector("#main");
var imagediv=document.querySelector("#image")
main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        ease:"back.out",
    })

})
imagediv.addEventListener("mouseenter",function(){
    cursor.innerHTML="view <br>more";
    gsap.to(cursor,{
        scale:2,
    })
})
imagediv.addEventListener("mouseleave",function(){
    cursor.innerHTML=" ";
    gsap.to(cursor,{
        scale:1,
    })
})