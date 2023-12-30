gsap.to(".image-div", {
	y: -220,
	scrollTrigger: {
		trigger: ".section-two",
		start: "top 60%",
		end: "bottom bottom",
		scrub: true,
	},
});
gsap.from(".biography-text", {
	y: 220,
	opacity: 0,
	scrollTrigger: {
		trigger: ".section-two",
		start: "top 90%",
		end: "top 0%",
		scrub: true,
	},
});

const bioLoadingAnim = gsap.timeline();

bioLoadingAnim.from(".text-div", {
	opacity: 0,
	y: 50,
});
bioLoadingAnim.from(".image-div", {
	opacity: 0,
	y: 50,
});
bioLoadingAnim.from(".pages-link ul li", {
	opacity: 0,
	y: 50,
	stagger: 0.1,
});
