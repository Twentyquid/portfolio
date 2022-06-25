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

let observer = new IntersectionObserver(interHandler, {
  root: null,
  rootMargin: "5px",
  threshold: 1,
});

let observer2 = new IntersectionObserver(interHandler, {
  root: null,
  rootMargin: "5px",
  threshold: 1,
});

let element = document.querySelector(".works");
let element2 = document.querySelectorAll(".works")[1];

observer.observe(element);
observer.observe(element2);

function interHandler(entries, observer) {
  entries.forEach((element) => {
    if (element.isIntersecting) {
      console.log("is intersecting");
      anime({
        targets: ".subtext",
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1500,
        translateX: [-100, 0],
      });
    }
  });
}
