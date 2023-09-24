let menu = document.getElementById("menu");
let links = document.getElementById("links");

menu.onclick = function () {
  links.classList.toggle("open")
;
    menu.classList.toggle("active")
;
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

//<![CDATA[
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
    //]]>
