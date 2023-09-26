let menu = document.getElementById("menu");
let links = document.getElementById("links");

menu.onclick = function () {
  links.classList.toggle("open");
    menu.classList.toggle("active");
}

function progressBarScroll() {
  let scrollTop = document.documentElement.scrollTop;

  height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  scrolled = (scrollTop / height) * 100;

  console.log(document.documentElement.scrollHeight);
  console.log(document.documentElement.clientHeight);

  document.getElementById("progressBar").style.width = scrolled + "%";
}

let scroll = document.querySelector('.scroll');

window.onscroll = function(){
  if(scrollY >= 300){
    scroll.classList.add('open');

  }
  else {
    scroll.classList.remove('open');

  }
const about = document.querySelector('.about');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    about.classList.add('scrolled');
  } else {
    about.classList.remove('scrolled');
  }
    progressBarScroll();
}
const boxes = document.querySelectorAll('.box');

function checkScroll() {
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const windowBottom = window.innerHeight;

    if (boxTop < windowBottom) {
      box.classList.add('visible');
    } else {
      box.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

let dark = document.getElementById("dark");
let body = document.querySelector("body");

  dark.addEventListener('click', function darkMode(darkMode){
  body.classList.toggle("dark");
})

let myName = "Developer";
let index = 1;

function writeText() {
  document.getElementById("hone").textContent = myName.slice(0,index);
  index++

if (index > myName.length) {
  index = 1;
}
}

setInterval(function () {
  writeText();
}, 415)

let myWork = "front-end";
index2 = 1;

function writeWork() {
  document.getElementById("span").textContent = myWork.slice(0,index2);
  index2++

  if (index2 > myWork.length) {
    index2 = 1;
  }
}

setInterval(function () {
  writeWork();
},411 )


document.oncontextmenu = function() {
return false;
};
document.onkeydown = function(e) {
if (e.keyCode == 123) {
return false;
}
if (e.ctrlKey && e.shiftKey && e.keyCode ==  I .charCodeAt(0)) {
return false;
}
if (e.ctrlKey && e.shiftKey && e.keyCode ==  J .charCodeAt(0)) {
return false;
}
if (e.ctrlKey && e.keyCode ==  U .charCodeAt(0)) {
return false;
}
if (e.ctrlKey && e.shiftKey && e.keyCode ==  C .charCodeAt(0)) {
return false;
}

}
