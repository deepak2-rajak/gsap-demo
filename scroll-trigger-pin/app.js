gsap.from("#part2 h1",{
    transform:"translate(-150%)",
    scrollTrigger:{
        trigger:"#part2 h1",
        scorller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})