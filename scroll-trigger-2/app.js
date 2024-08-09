gsap.from("#part1 #box",{
    scale:0,
    duration:2,
    rotate:360,
    yoyo:true,
    repeat:-1,
})
gsap.from("#part2 h1",{
    opacity:0,
    
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#part2 h1",
        scroller:"body",
        start:"top 50%",
    }

})
gsap.from("#part2 h2",{
    opacity:0,
    duration:2,

    x:-500,
    scrollTrigger:{
        trigger:"#part2 h2",
        scroller:"body",
        start:"top 50%",
    }

})
