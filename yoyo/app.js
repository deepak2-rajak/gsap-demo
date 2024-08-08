// gsap.to(".box",{
//     x:1000,
//     opacity:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     scale:1,
// })
// gsap.from(".box",{
//     x:1000,
//     opacity:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     scale:1,
// })
//use of yoyo true
gsap.to(".box",{
    opacity:0,
    scale:0,
    x:1300,
    duration:2,
    delay:1,
    rotate:360,
    repeat:-1,
    yoyo:true,
})
gsap.to("h1",{
    opacity:0,
 
    y:-30,
    delay:0.5,
    duration:2,
    yoyo:true,
    repeat:-1,
    color:"red",



})
