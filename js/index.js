let logo = document.querySelectorAll(".logo");
let navlinks = document.querySelectorAll(".nav-links");
let heroimage = document.querySelectorAll(".hero-image");

document.addEventListener("DOMContentLoaded", () => {
  anime({
    targets: logo,
    translateY: [-10, 0],
    easing: "easeOutExpo",
    opacity: [0.2, 1],
  });

  anime({
    targets: navlinks,
    translateY: [-20, 0],
    easing: "easeOutExpo",
    opacity: [0, 1],
  });

  anime({
    targets: heroimage,
    easing: "easeOutExpo",
    translateY: [-50, 0],
    opacity: [0, 1],
    delay: 1100,
  });

  anime({
    targets: ".bar1",
    width: ["0px", "30px"],
    easing: "easeOutExpo",
    delay: 1050,
  });

  anime({
    targets: ".bar2",
    width: ["0px", "25px"],
    easing: "easeOutExpo",
    delay: 1100,
  });

  anime({
    targets: ".bar3",
    width: ["0px", "20px"],
    easing: "easeOutExpo",
    delay: 1150,
  });
});
