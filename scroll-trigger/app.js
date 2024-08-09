gsap.from("#part1 #box",{
    opacity:0,
    scale:0,
    duration:2,
    rotate:360,
   
}) 
gsap.from("#part2 #box",{
    opacity:0,
    scale:0,
    duration:2,
    rotate:360,
    //scrollTrigger:"#part2 #box",
    scrollTrigger:{
        trigger:"#part2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        
     
    }
}) 
gsap.from("#part3 #box",{
    opacity:0,
    scale:0,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#part3 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%"
     
    }
}) 