let progress = document.querySelector(".hot");
let anpro = document.querySelector(".progress");
let linear = document.querySelector(".linear");
let tra = document.querySelector(".inner");
let fill = document.querySelector(".filled");
let state = false;
let a = 0;
let c = -500;
anpro.addEventListener("click", () => {
  if (state == false) {
    fill.style.animationPlayState = "running";
    state = true;
  } else {
    fill.style.animationPlayState = "paused";
    state = false;
  }
});
window.onload = () => {
  let time = setInterval(() => {
    if (progress.value < progress.max) {
      progress.value = progress.value + 0.4;
    } else {
      progress.value = 0;
    }
  }, 20);
  let pro = setInterval(() => {
    if (a < 100) {
      a = a + 0.3;
      linear.style.background =
        "linear-gradient(to right, blue, blue " + a + "%, #eee 0%)";
    } else {
      a = 0;
    }
  }, 20);
  let t = setInterval(() => {
    if (c < 0) {
      c++;
      tra.style.transform = "translate(" + c + "px)";
    } else {
      c = -500;
    }
  }, 20);
};
