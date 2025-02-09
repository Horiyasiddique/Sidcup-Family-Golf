// animating navbar color and width on the bases of scrlling
gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.4,
  height: "12vh",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -11%",
    end: "top -11%",
    scrub: 1,
  },
});

//animating background color on the bases of scrlling
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

//custom cursor
document.addEventListener("mousemove", (dets) => {
  const cursor = document.querySelector("#cursor");
  gsap.to(cursor, {
    x: dets.x + 30 + "px",
    y: dets.y,
    duration: 1.2,
    ease: "back.out(1.7)",
  });
});

// custom blur cursor
document.addEventListener("mousemove", (dets) => {
  const cursorBlur = document.querySelector("#cursor-blur");
  gsap.to(cursorBlur, {
    x: dets.x - 150 + "px",
    y: dets.y - 150 + "px",
    duration: 1.2,
    ease: "back.out(1.7)",
  });
});

//changing cursor style when it hovers on navbars h4s
let headings = document.querySelectorAll("#nav h4");
headings.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const cursor = document.querySelector("#cursor");
    gsap.to(cursor, {
      scale: 2.3,
      backgroundColor: "transparent",
      border: "0.9px solid white",
    });
  });

  //for mouseleave
  item.addEventListener("mouseleave", () => {
    const cursor = document.querySelector("#cursor");
    gsap.to(cursor, {
      scale: 1,
      backgroundColor: "#95C11E",
      border: "none",
    });
  });
});

//scroll Trigger for bout us section
gsap.from("#about-us, #about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  stagger: 0.6,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 3,
  },
});

//animationg inverted commas on the bases of scrolling
gsap.from("#quote1", {
  x: -70,
  y: -70,
  scrollTrigger: {
    trigger: "#quote1",
    scroller: "body",
    start: "top 55%",
    end: "top 44%",
    scrub: 3,
  },
});

gsap.from("#quote2", {
  x: 70,
  y: 70,
  scrollTrigger: {
    trigger: "#quote1",
    scroller: "body",
    start: "top 55%",
    end: "top 44%",
    scrub: 3,
  },
});

//page4 text effect
gsap.from("#page4 h1", {
  y: 28,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 1,
  },
});
