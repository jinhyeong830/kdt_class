//library 불러오기
/*
AOS.init({
	offset: 300,
	duration: 1000,
	delay: 300,
});
*/

// let tl = gsap.timeline();

// tl.to(".box1", {
// 	x: 1000,
// 	rotation: 720,
// 	duration: 3,
// })
// 	.to(".box1", {
// 		backgroundColor: "orange",
// 		duration: 1,
// 	})
// 	.to(".box1", {
// 		x: 0,
// 		opacity: 0,
// 		duration: 3,
// 	});

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
	ease: "none",
	duration: 2,
});

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".wrap",
		start: "top top",
		markers: true,
		end: "+=3000",
		scrub: true,
		pin: true,
	},
});

tl.from(".ygreen", {
	xPercent: -100,
})
	.from(".hotpink", { xPercent: 100 })
	.from(".gold", { yPercent: -100 });
// gsap.to(".box1", {
// 	scrollTrigger: {
// 		trigger: ".box1",
// 		toggleActions: "restart",
// 		markers: true,
// 		scrubs: true,
// 		start: "bottom 50%",
// 		end: "+=3000",
// 		pin: true,
// 	},
// 	x: 1000,
// 	rotation: 720,
// 	scale: 2,
// 	duration: 3,
// });

// gsap.from(".box2", {
// 	scrollTrigger: {
// 		trigger: ".box3",
// 	},
// 	x: 1000,
// 	rotation: 720,
// 	scale: 2,
// 	duration: 3,
// });
