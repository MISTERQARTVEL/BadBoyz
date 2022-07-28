const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

//responsive

var menu = document.querySelector('.navbar')
var ggs = document.querySelector('activemenu')

menuBtn.addEventListener("click", () =>{
  menu.classList.toggle('activemenu');
})

