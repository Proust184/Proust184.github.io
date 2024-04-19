let navbar = document.getElementById("main-nav");
let viewportHeight = window.innerHeight;
let navHeight = document.getElementById("main-nav").offsetHeight;

let navbarLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", e => {
  scrollpos = window.scrollY;
  navbarLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (section.offsetTop <= scrollpos + 150 &&
        section.offsetTop + section.offsetHeight > scrollpos + 150) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

function tweetPopup() {
    let popup = document.querySelector('#tweet-academy-popup');
    popup.classList.toggle("open");
}

function cinemaPopup() {
    let popup = document.querySelector('#my-cinema-popup');
    popup.classList.toggle("open");
}

function chatteriePopup() {
    let popup = document.querySelector('#chatterie-popup');
    popup.classList.toggle("open");
}