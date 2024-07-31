window.addEventListener("load", function () {
  var t1 = gsap.timeline();
  t1.to("#yellow1", {
    top: "-100%",
    delay: 0,
    duration: 0.3,
    ease: "expo.out",
  });
  t1.from(
    "#yellow2",
    {
      top: "100%",
      delay: 1.5,
      duration: 0.7,
      ease: "power4.out",
    },
    "<"
  ); // Use "<" to align this animation with the previous one
  t1.to(
    "#loader h1",
    {
      delay: 0.6,
      duration: 0.5,
      color: "black",
    },
    "-=1"
  ); // Adjust timing to start 0.5 seconds before the previous animation ends
  t1.to("#loader", {
    opacity: 0,
    duration: 1,
    onComplete: function () {
      document.getElementById("loader").style.display = "none";
    },
  });
});

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

document.querySelector(".scroll-icon-page1").addEventListener("click", () => {
  const page2 = document.querySelector("#page2");
  scroll.scrollTo(page2);
});

document.querySelector(".scroll-icon-page2").addEventListener("click", () => {
  const page3 = document.querySelector("#page3");
  scroll.scrollTo(page3);
});

document.querySelector("#footer h2").addEventListener("click", () => {
  scroll.scrollTo(0);
});
document.querySelector("#footer .svg-icon").addEventListener("click", () => {
  scroll.scrollTo(0);
});
var elems = document.querySelectorAll(".elem");
var page2 = document.querySelector("#page2");

elems.forEach(function (ele) {
  ele.addEventListener("mouseenter", function () {
    var bgimg = ele.getAttribute("data-img");
    page2.style.backgroundImage = `url(${bgimg})`;
  });
});
