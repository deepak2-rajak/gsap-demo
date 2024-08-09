// gsap.to("#box1",{
//     x:1500,
//     duration:2,
//     delay:0,
//     yoyo:true,
//     repeat:-1,

// })
// gsap.to("#box2",{
//     x:1500,
//     duration:2,
//     delay:0,
//     yoyo:true,
//     repeat:-1,

// })
// gsap.to("#box3",{
//     x:1500,
//     duration:3,
//     delay:0,
//     yoyo:true,
//     repeat:-1,

// })
var tl=gsap.timeline();
tl.to("#box1",{
    opacity:0,
    x:1500,
    delay:1,
    duration:2,
})
tl.to("#box2",{
    opacity:0,
    x:1500,
    delay:1,
    duration:2,
})
tl.to("#box3",{
    opacity:0,
    x:1500,
    delay:1,
    duration:2,
})