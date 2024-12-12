const box = document.getElementById("box");

box.innerHTML = "halo";

gsap.to("#box", {
  x: 0,
});
