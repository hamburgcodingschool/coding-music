/******/ (() => { // webpackBootstrap
/******/ 	"use strict";



console.log("Welcome, student! 🧑‍💻");

const mobileMenuButton = document.getElementById("mobile-open-menu");
const mobileMenu = document.getElementById("mobile-menu");
const burgerIcon = document.getElementById("menu-icon-burger");
const closeIcon = document.getElementById("menu-icon-close");
let isOpen = false;
mobileMenuButton.addEventListener('click', () => {
  if (!isOpen) {
    console.log("Open mobile menu");
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('block');
    burgerIcon.classList.remove('block');
    burgerIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    closeIcon.classList.add('block');
    isOpen = true;
  } else {
    console.log("Close mobile menu");
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('block');
    burgerIcon.classList.add('block');
    burgerIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    closeIcon.classList.remove('block');
    isOpen = false;
  }
})

let audio;
const startStream = () => {
  var audioCtx = new AudioContext();
  audio = new Audio();
  var source = audioCtx.createMediaElementSource(audio);
  source.connect(audioCtx.destination);
  audio.crossOrigin = "anonymous";
  audio.src = "//ice2.somafm.com/defcon-256-mp3";

  audio.addEventListener(
    "canplaythrough",
    function () {
      console.log("May play now");
      audio.play()
        .then(() => {
          console.log("Playing now!");
        }).catch((e) => {
        console.e(e)
      })
    },
    false
  );
}

let playing = false;
let button = document.getElementById("play");
let buttonText = document.getElementById("play-text");
let iconPlay = document.getElementById("play-play");
let iconStop = document.getElementById("play-stop");
button?.addEventListener("click", async () => {
  if (!playing) {
    buttonText.textContent = "Stop";
    iconPlay.classList.replace('block', 'hidden');
    iconStop.classList.replace('hidden', 'block');
    if (audio) {
      audio.play();
    } else {
      startStream();
    }
    playing = true;
  } else {
    if (audio) {
      audio.pause();
    }
    buttonText.textContent = "Play";
    iconPlay.classList.replace('hidden', 'block');
    iconStop.classList.replace('block', 'hidden');
    playing = false;
  }
});


/******/ })()
;