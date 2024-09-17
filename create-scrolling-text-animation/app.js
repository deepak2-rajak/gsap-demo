gsap.to("page2 h1",{
    transform:"transalte(-150%)",
    scrolltrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,
        
    }
})